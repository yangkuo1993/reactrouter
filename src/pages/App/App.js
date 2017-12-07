import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import Button from '../../components/Button/Button'
import store from '../../store/store'
import {subscribe} from 'redux'
class App extends Component {
    constructor(){
        super();
        this.state = {
            allCount: 0
        };
    }
    render() {
        store.subscribe(() => {
            this.setState({
                allCount: store.getState()
            });
        });
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
                      <Button></Button>
                      <Button></Button>
                      <Button></Button>
                  <div>AllCount:::::{this.state.allCount}</div>
              </div>
        );
    }
}
export default App;
