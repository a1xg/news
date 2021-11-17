import React, { Fragment, useState, useEffect } from 'react';

const Account = ({isAuth}) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    if (isAuth === true) {
      const user = localStorage.getItem('user')
      setUser(user)
    }
  }, [isAuth]);

  return (
    <div>
      {isAuth && (
        <Fragment>
          <h1>Account</h1>
          <h2>Hello {user}!</h2>
        </Fragment>
      )}
    </div>
  );
};

export default Account;