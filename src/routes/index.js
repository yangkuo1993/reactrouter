import React from 'react'
import {HashRouter  as Router, Route, Switch} from 'react-router-dom'
import App from '../pages/App/App'
import About from '../pages/About/About'
import Topics from '../pages/Topics/Topics'
import NoMatch from '../pages/NoMatch/NoMatch'

const RouterMap = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/topic" component={Topics}/>
            <Route component={NoMatch}/>
        </Switch>
    </Router>
)
export default RouterMap