import { NavLink } from "react-router-dom";
import React, { useState, useEffect, Fragment } from 'react';


const NavBar = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      if (localStorage.getItem('token') !== null) {
        setIsAuth(true);
        console.log('token', localStorage.getItem('token'))
      }
    }, []);

    return (
      <nav>
      <ul>
        {isAuth === true ? (
          <Fragment>
            {' '}
            <li>
            <NavLink to='/dashboard'>Account</NavLink>
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