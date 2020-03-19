import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function App(props) {
  console.log(props)
  return (
    <div className="App">
     <h2>根组件11</h2> 
     <Link to="/a">到a</Link>
     <Link to="/b">到b</Link>
     {props.children}
    </div>
  );
}

export default App;
