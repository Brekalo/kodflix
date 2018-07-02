import React, { Component } from 'react';
import imageMother from './image/All_About_My_Mother.jpg';
import BlackMirror from './image/BlackMirror.jpg';
import BreakingBad from './image/BreakingBad.jpg';
import DeathNote from './image/DeathNote.jpg';
import GameOfThrones from './image/GameOfThrones.jpg';
import TheWalkingDead from './image/TheWalkingDead.jpg';
import TheWire from './image/TheWire.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <header className="App-header">
                <h1 className="App-title">All About My Mother</h1>
            </header>
            <p className="App-body">
                "A Greek saying states that only women <br />
                who have washed their eyes <br />
                with tears can see clearly." <br />
            <img src={imageMother} className="AAMM" alt="" />
            </p>
            <div className="container">
                <div className="Cover-image">
                    <h2 className="Cover-subtitle">Black Mirror</h2>
                    <img src={BlackMirror}  alt='' />
                    </div>
                <div className="Cover-image">
                    <h2 className="Cover-subtitle">Breaking Bad</h2>
                    <img src={BreakingBad} alt='' />
                    </div>
                <div class Name="Cover-image">
                    <h2 className="Cover-subtitle">Death Note</h2>
                    <img src={DeathNote} alt='' />
                    </div>
            </div>
            <div className="container">
                <div className="Cover-image">
                    <h2 className="Cover-subtitle">Game of Thrones</h2>
                    <img src={GameOfThrones} alt='' />
                    </div>
                <div className="Cover-image">
                    <h2 className="Cover-subtitle">The Walking Dead</h2>
                    <img src={TheWalkingDead} alt='' />
                    </div>
                <div className="Cover-image">
                    <h2 className="Cover-subtitle">The Wire</h2>
                    <img src={TheWire} alt='' />
                    </div>
            </div>
      </div>
    );
  }
}
export default App;
