import React, {Component} from 'react'
import Search from '../../components/Search/Search'
class About extends Component {
    render(){
        return(
            <div>
                <h2>about</h2>
                <Search >
                    <div>牛逼了</div>
                </Search>
                <div>{this.props.match.params.id}</div>
            </div>
        )
    }
}

export default About