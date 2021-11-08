import React from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import NewsList from './components/News/NewsList/NewsList.jsx';
import NewsDetail from './components/News/NewsDetail/NewsDetail.jsx';
import Login from './components/Authorization/Login.js';
import SignUp from './components/Authorization/SignUp.js';
import { Provider } from 'react-redux';
import store from './store.js'
// TODO сделать формы авторизации, регистрации и кнопку для выхода на фронте


const App = (props) => {
  console.log('app')
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <p>
            <NavLink to='/login'>Login </NavLink>|
            <NavLink to='/signup'> Signup</NavLink>
          </p>
          <div>
            <Route exact path='/' component={NewsList} />
            <Route exact path='/news/detail/:postID' component={NewsDetail} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
