import React, { Component } from 'react';
import image from './image/All_About_My_Mother.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">All About My Mother</h1>
        </header>
        <p className="App-body">
            A Greek saying states that only women <br />
            who have washed their eyes <br />
            with tears can see clearly. <br />
          <img src={image} className="AAMM" alt="logo" />
        </p>

      <div className="container">
        <h2 className="App-subtitle">Black Mirror</h2>
        <h2 className="App-subtitle">Breaking Bad</h2>
        <h2 className="App-subtitle">Death Note</h2>
      </div>
      <div className="container">
        <h2 className="App-subtitle">Game of Thrones</h2>
        <h2 className="App-subtitle">The Walking Dead</h2>
        <h2 className="App-subtitle">The Wire</h2>
      </div>
      </div>

    );
  }
}

export default App;
