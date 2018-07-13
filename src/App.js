import React, { Component } from 'react';
import CoverMovie from './frontend/gallery/CoverMovie.js';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='coverContainer'>
                    <CoverMovie />
                </div>
            </div> 
        )
    }
}
export default App;