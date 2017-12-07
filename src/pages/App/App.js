import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import Button from '../../components/Button/Button'
import store from '../../store/store'
import {subscribe} from 'redux'
import AddTodo from '../../components/AddTodos/AddTodos';
import TodoList from '../../components/TodoList/TodoList';
import Footer from '../../components/Footer/Footer';
function listener() {
    this.setState({
        allCount: store.getState()
    });
}
class App extends Component {
    constructor(){
        super();
        this.state = {
            allCount: store.getState()
        };
        this.listener = this.listener.bind(this);
        this.addClick = this.addClick.bind(this);
    }
    listener() {
        this.setState({
            allCount: store.getState()
        });
    }
    addClick(text) {
        console.log(text)
    }
    render() {
        store.subscribe(this.listener);
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
                  <AddTodo
                      onAddClick={text =>
                          console.log('add todo', text)
                      } />
                  <TodoList
                      todos={[{
                          text: 'Use Redux',
                          completed: true
                      }, {
                          text: 'Learn to connect it to React',
                          completed: false
                      }]}
                      onTodoClick={todo =>
                          console.log('todo clicked', todo)
                      } />
                  <Footer
                      filter='SHOW_ALL'
                      onFilterChange={filter =>
                          console.log('filter change', filter)
                      } />
              </div>
        );
    }
}
export default App;
