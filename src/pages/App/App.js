import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/about/1234">about</Link>
        </div>
        <div>
          <Link to="/topic">topic</Link>
        </div>
          <div>
              <Link to="/will-not-match">Will Not Match</Link>
          </div>
          <div>
              <Link to="/also/will/not/match">Also Will Not Match</Link>
          </div>
      </div>
    );
  }
}

export default App;
