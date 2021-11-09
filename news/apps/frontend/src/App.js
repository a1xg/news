import React from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import NewsList from './components/News/NewsList/NewsList.jsx';
import NewsDetail from './components/News/NewsDetail/NewsDetail.jsx';

// TODO сделать формы авторизации, регистрации и кнопку для выхода на фронте


const App = (props) => {
  console.log('app props', props)
  return (
    <BrowserRouter>
      <div className="app">
        <p>
          {/*
           <NavLink to='/login'>Login </NavLink>|
          <NavLink to='/signup'> Signup</NavLink>
          */}
        </p>
        <div>
          <Route exact path='/' component={NewsList} />
          <Route exact path='/news/detail/:postID' component={NewsDetail} />
          {/*
           <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          */}
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
