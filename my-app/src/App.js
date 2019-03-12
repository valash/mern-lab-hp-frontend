import React, { Component } from 'react';
import Search from './Components/Search';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Show from './Components/Show';

import './App.css';

const url = 'http://localhsot:3001/characters';

class App extends Component {
    constructor() {
        super();
        this.state = {
            characters: []
            // searchInput= ""
        };
    }
    componentDidMount() {
        fetch('http://localhost:3001/characters/')
            .then(res => res.json())
            .then(res => this.setState({ characters: res }, () => console.log(this.state)));
    }

    searchCharacter = e => {
        e.preventDefault();
        const characterName = e.target.elements.name.value;
        axios.get(`http://localhost:3001/characters/${characterName}`).then(res => {
            console.log(res);
            // const name = res.data;
            // console.log(name);
            // this.setState({ name });
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hello HP</h1>
                    <Switch>
                        <Route path="/" to="/home" />
                        <Route path="/create" to="/create" />
                        <Route path="/characters" to="/characters" />
                    </Switch>
                </header>
                <div className="main">
                    <div className="search">
                        <Search searchCharacter={this.searchCharacter} />
                        {this.state.name ? <p>Character Name : {this.state.name}</p> : <p>Enter a Name</p>}
                    </div>
                    <div className="nav-bar">
                        <Route path="/" exact render={() => <Home characters={this.state.name} />} />
                        <Route path="/characters/:name" render={props => <Show {...props} {...this.state} />} />
                        <Route path="/create" render={() => <Create addChar={this.addChar} />} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
