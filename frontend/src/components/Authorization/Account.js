import React, { Fragment } from 'react';

const Account = () => {
  return (
    <div>
      {localStorage.user && (
        <Fragment>
          <h1>Account</h1>
          <h2>Hello {localStorage.getItem('user')}!</h2>
        </Fragment>
      )}
    </div>
  );
};

export default Account;