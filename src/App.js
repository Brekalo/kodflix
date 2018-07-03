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
                    <h2 className="Cover-subtitle-overlay">Black Mirror</h2>
                    <img src={BlackMirror}  alt='Black Mirror' />
                    </div>
                <div className="Cover-image">
                    <h2 className="Cover-subtitle-overlay">Breaking Bad</h2>
                    <img src={BreakingBad} alt='Breaking Bad' />
                    </div>
                <div className="Cover-image">
                    <h2 className="Cover-subtitle-overlay">Death Note</h2>
                    <img src={DeathNote} alt='Death Note' />
                    </div>
            </div>
            <div className="container">
                <div className="Cover-image">
                    <h2 className="Cover-subtitle-overlay">Game of Thrones</h2>
                    <img src={GameOfThrones} alt='Game of Thrones' />
                    </div>
                <div className="Cover-image">
                    <h2 className="Cover-subtitle-overlay">The Walking Dead</h2>
                    <img src={TheWalkingDead} alt='The Walking Dead' />
                    </div>
                <div className="Cover-image">
                    <h2 className="Cover-subtitle-overlay">The Wire</h2>
                    <img src={TheWire} alt='The Wire' />
                    </div>
            </div>
      </div>
    );
  }
}
export default App;
