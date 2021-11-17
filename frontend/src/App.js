import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NewsList from './components/News/NewsList/NewsList.jsx';
import NewsDetailContainer from './components/News/NewsDetail/NewsDetailContainer.jsx';
import Signup from './components/Authorization/Signup.js';
import Login from './components/Authorization/Login.js';
import Logout from './components/Authorization/Logout.js';
import Account from './components/Authorization/Account.js';
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar isAuth={isAuth} />
        <div>
          <Route
            exact path='/'
            component={() =>
              <NewsList isAuth={isAuth}
              />
            }
          />
          <Route
            exact path='/news/detail/:postID'
            component={(props) =>
              <NewsDetailContainer
                data={props}
                isAuth={isAuth}
              />
            }
          />
          <Route
            exact path='/login'
            component={() =>
              <Login
                setIsAuth={setIsAuth}
                isAuth={isAuth}
              />
            }
          />
          <Route
            exact path='/signup'
            component={() =>
              <Signup
                setIsAuth={setIsAuth}
                isAuth={isAuth}
              />
            }
          />
          <Route
            exact path='/logout'
            component={() =>
              <Logout
                setIsAuth={setIsAuth}
                isAuth={isAuth}
              />
            }
          />
          <Route
            exact path='/account'
            component={() =>
              <Account isAuth={isAuth} />
            }
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;