import React, {Component} from 'react'
import {Route} from 'react-router-dom'
class Topic extends Component {
    render(){
        return(
            <div>
                <h2>{this.props.match.params.topicId}</h2>
            </div>
        )
    }
}
export default Topic