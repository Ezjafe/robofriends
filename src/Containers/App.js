import React from 'react';
import CardList from '../Components/CardList.js'
import SearchBox from '../Components/SearchBox.js'
import Scroll from '../Components/Scroll.js'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( (response) =>{
                return response.json();
            })
            .then((users) => {
                this.setState({ robots: users })
            })
    }

    onSearch = (event) =>{
        this.setState({ searchfield: event.target.value});
    }
    render(){
        const filterRobots = this.state.robots.filter((robot) =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>Robo friends</h1>
                <SearchBox onSearch={this.onSearch}/>
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;