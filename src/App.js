import React, {Component} from "react";
import {robots} from "./Robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './Card.css'

searchChange = (event) => {
    this.setState({searchfield: event.target.value})
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }
render(){
    return (
        <div className= 'tc pa3'>
            <h1>RoboFriends</h1>
            <SearchBox/>
            <CardList robots={this.state.robots} />
        </div>
    );
}
}

export default App;