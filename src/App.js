import React, { Component } from 'react';
import logo from './image/All_About_My_Mother.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">All About My Mother</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <img src={logo} className="" alt="logo" />
        </p>
      </div>
    );
  }
}

export default App;
