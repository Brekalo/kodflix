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
                    <img src={BlackMirror}  className='Slika' alt='Black Mirror' />
                    <div className="Title"><h2>Black Mirror</h2></div>
                </div>

                <div className="Cover-image">
                    <img src={BreakingBad} className='Slika' alt='Breaking Bad' />
                    <div className="Title"><h2>Breaking Bad</h2></div>
                </div>

                <div className="Cover-image">
                    <img src={DeathNote} className='Slika' alt='Death Note' />
                    <div className="Title"><h2>Death Note</h2></div>
                </div>
                
            </div>
            <div className="container">
                <div className="Cover-image">
                    <img src={GameOfThrones} className='Slika' alt='Game of Thrones' />
                    <div className="Title"><h2>Game of Thrones</h2></div>
                </div>

                <div className="Cover-image">
                    <img src={TheWalkingDead} className='Slika' alt='The Walking Dead' />
                    <div className="Title"><h2>The Walking Dead</h2></div>
                </div>

                <div className="Cover-image">
                    <img src={TheWire} className='Slika' alt='The Wire' />
                    <div className="Title"><h2>The Wire</h2></div>
                </div>
            </div>
      </div>
    );
  }
}
export default App;
