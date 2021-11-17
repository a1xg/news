import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import csrftoken from './csrftoken';

const Signup = ({isAuth, setIsAuth}) => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isAuth === true) {
      history.push('/');
    }
  }, [isAuth, history]);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password1: password1,
      password2: password2
    };

    fetch('/api/v1/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          localStorage.setItem('user', username);
          setIsAuth(true);
        } else {
          setUsername('');
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      {isAuth === false && <h1>Signup</h1>}
      {errors === true && <h2>Unable to register</h2>}
      <form onSubmit={onSubmit}>
        <label htmlFor='username'>Username:</label> <br />
        <input
          name='username'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor='password1'>Password:</label> <br />
        <input
          name='password1'
          type='password'
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          required
        />
        <br />
        <label htmlFor='password2'>Confirm password:</label> <br />
        <input
          name='password2'
          type='password'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
        />{' '}
        <br />
        <input type='submit' value='Signup' />
      </form>
    </div>
  );
};

export default Signup;