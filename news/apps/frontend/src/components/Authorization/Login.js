import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import csrftoken from './csrftoken.js';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            history.push('/dashboard');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        };
        fetch('/api/v1/auth/login/', {
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
                        fetch('/api/v1/auth/user/', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Token ${data.key}`
                            }
                        })
                            .then(res => res.json())
                            .then(userdata => {
                                localStorage.setItem('user', userdata.username)
                                setLoading(false);
                            });
                    history.push('/');
                } else {
                    setUsername('');
                    setPassword('');
                    localStorage.clear();
                    setErrors(true);
                }
            });

    };

    return (
        <div>
            {loading === false && <h1>Login</h1>}
            {errors === true && <h2>Login failed</h2>}
            {loading === false && (
                <form onSubmit={onSubmit}>
                    <label htmlFor='username'>Username:</label> <br />
                    <input
                        name='username'
                        type='text'
                        value={username}
                        required
                        onChange={e => setUsername(e.target.value)}
                    />
                    <br />
                    <label htmlFor='password'>Password:</label> <br />
                    <input
                        name='password'
                        type='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                    <input type='submit' value='Login' />
                </form>
            )}
        </div>
    );
};

export default Login;