import React, { Component } from 'react';
import CoverMovie from '../CoverMovie/CoverMovie';
import Details from '../Details/Details.js';
import './App.css';
import Welcome from '../Welcome/Welcome';
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
           <Router> 
                <div className='App'>
                <Welcome />
                    <Route exact path='/' component={CoverMovie} />
                    <Route path='/details' component={Details} />
                </div> 
            </Router>
        );
    }
}
export default App;