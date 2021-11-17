import React, { useState, useEffect, Fragment } from 'react';
import {useHistory} from 'react-router-dom';
import csrftoken from './csrftoken';

const Logout = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      setLoading(false);
    } else { 
      history.push('/');
    }
  }, [history]);

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
        history.push('/');

      });
  };

  return (
    <div>
      {loading === false && (
        <Fragment>
          <h1>Are you sure you want to logout?</h1>
          <input type='button' value='Logout' onClick={handleLogout} />
        </Fragment>
      )}
    </div>
  );
};

export default Logout;