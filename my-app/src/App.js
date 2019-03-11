import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Show from './Components/Show';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>hello harry potter LOVERS</h1>
                </header>
                <Route path="/" />
                <Route path="/characters/:name" />
                <Route path="/create" />
            </div>
        );
    }
}

export default App;
