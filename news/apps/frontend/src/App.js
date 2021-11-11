import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NewsList from './components/News/NewsList/NewsList.jsx';
import NewsDetailContainer from './components/News/NewsDetail/NewsDetailContainer.jsx';
import Signup from './components/Authorization/Signup.js';
import Login from './components/Authorization/Login.js';
import Logout from './components/Authorization/Logout.js';
import Account from './components/Authorization/Account.js';
import NavBar from './components/NavBar/NavBar.jsx';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div>
          <Route exact path='/' component={NewsList} />
          <Route exact path='/news/detail/:postID' component={NewsDetailContainer} /> 
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/logout' component={Logout} /> 
          <Route exact path='/account' component={Account} />        
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
