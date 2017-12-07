import React, {Component} from 'react'
import PropTypes from 'prop-types'
class AddTodos extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    static propTypes = {
        onAddClick: PropTypes.func.isRequired
    }
    handleClick (e) {
        const text = this.refs.input.value.trim();
        this.props.onAddClick(text);
        this.refs.input.value = '';
    }
    render(){
        return(
            <div>
                <input type="text" ref="input"/>
                <button onClick={e => this.handleClick(e)}>Add</button>
            </div>
        )
    }
}
export default AddTodos