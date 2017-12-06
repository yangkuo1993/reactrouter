import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/about">about</Link>
        </div>
        <div>
          <Link to="/topic">topic</Link>
        </div>
      </div>
    );
  }
}

export default App;
