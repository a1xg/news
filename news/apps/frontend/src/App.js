import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import NewsList from './components/News/NewsList/NewsList.jsx';
import NewsDetail from './components/News/NewsDetail/NewsDetail.jsx';

const App = (props) => {
  console.log('app')
  return (
    
    <div className="app">
      <Route exact path='/' component={NewsList} />
      <Route path='/detail/:postID' component={NewsDetail} />
    </div>
    
  );
}

export default App;
