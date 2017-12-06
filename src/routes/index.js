import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from '../pages/App/App'
import About from '../pages/About/About'
import Topics from '../pages/Topics/Topics'

const RouterMap = () => (
    <Router>
        <div>
            <Route exact path="/" component={App}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topic" component={Topics}></Route>
        </div>
    </Router>
)
export default RouterMap