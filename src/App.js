import React, {Component} from "react";
import {robots} from "./Robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './Card.css'
import './App.css'




class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

        console.log(event.target.value);
        localStorage.setItem('searchfield', event.target.value);
    }
render(){
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
        <div className= 'tc pa3'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots} />
        </div>
    );
}
}

export default App;