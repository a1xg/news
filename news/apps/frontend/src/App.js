import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NewsList from './components/News/NewsList/NewsList.jsx';
import NewsDetail from './components/News/NewsDetail/NewsDetail.jsx';
import Signup from './components/Authorization/Signup.js';
import Login from './components/Authorization/Login.js';
import Logout from './components/Authorization/Logout.js';
import Dashboard from './components/Authorization/Dashboard.js';
import NavBar from './components/NavBar/NavBar.jsx';

// TODO сделать формы авторизации, регистрации и кнопку для выхода на фронте


const App = (props) => {
  console.log('app props', props)
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div>
          <Route exact path='/' component={NewsList} />
          <Route exact path='/news/detail/:postID' component={NewsDetail} />          
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/dashboard' component={Dashboard} />
          
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
