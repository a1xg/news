import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import csrftoken from './csrftoken';

const Logout = ({ isAuth, setIsAuth }) => {
  const history = useHistory();

  useEffect(() => {
    if (isAuth === false) {
      history.push('/');
    }
  }, [isAuth, history]);

  const handleLogout = (e) => {
    e.preventDefault();

    fetch('/api/v1/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.clear();
        setIsAuth(false);
      });
  };

  return (
    <div>
      {isAuth && (
        <Fragment>
          <h1>Are you sure you want to logout?</h1>
          <input type='button' value='Logout' onClick={handleLogout} />
        </Fragment>
      )}
    </div>
  );
};

export default Logout;