import React from 'react';
import './App.css';

function App() {
  const arr = ['fh4','2s52','3fh52','345','vfff','rff','5c3','v535']
  return (
    <div className="app">
      {arr.map(item => {
        return (
          <p key={item}>{item}</p>
        )
      })}
        
    </div>
  );
}

export default App;
