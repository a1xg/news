import { NavLink } from "react-router-dom";
import React, { useState, useEffect, Fragment } from 'react';

const NavBar = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState('')
    useEffect(() => {
      if (localStorage.getItem('token') !== null) {
        setIsAuth(true);
        setUser(localStorage.getItem('user'))
      }
    }, []);

    return (
      <nav>
      <ul>
        {isAuth === true ? (
          <Fragment>
            <li>
            <NavLink to='/account'>{user}</NavLink>
            </li>
            <li>
            <NavLink to='/logout'>Logout</NavLink>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
            <NavLink to='/login'>Login</NavLink>|
            </li>
            <li>
            <NavLink to='/signup'>Signup</NavLink>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>

    )
};

export default NavBar;