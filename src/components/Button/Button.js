import React, {Component} from 'react'
import store from '../../store/store'
import {addAction} from '../../actions/AddActions'
class Button extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
    }
    increase () {
        this.setState({
            count: this.state.count + 1
        })
        store.dispatch(addAction(3))
    }
    render(){
        return(
            <div>
                <button onClick={this.increase}>{this.state.count}</button>
            </div>
        )
    }
}
export default Button