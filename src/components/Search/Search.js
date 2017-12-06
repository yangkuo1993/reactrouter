import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Search extends Component {
    render(){
        return(
            <div>
                <h2>
                    {this.props.name}
                    {this.props.children}
                </h2>
            </div>
        )
    }
}
Search.propTypes = {
    name: PropTypes.string.isRequired
}
Search.defaultProps = {
    name: '真是没设'
}
export default Search