import React from 'react';
import BlackMirror from './image/BlackMirror.jpg';
import BreakingBad from './image/BreakingBad.jpg';
import DeathNote from './image/DeathNote.jpg';
import GameOfThrones from './image/GameOfThrones.jpg';
import TheWalkingDead from './image/TheWalkingDead.jpg';
import TheWire from './image/TheWire.jpg';

export default class CoverMovie extends React.Component {
    render(){
        return (
            <div>
                <div className='coverContainer'>
                    <div className='coverImage'>
                        <img src={BlackMirror} className='cover' alt='Black Mirror' />
                        <div className='coverTitle'><h1>Black Mirror</h1></div>
                    </div>
                    <div className='coverImage'>
                        <img src={BreakingBad} className='cover' alt='Breaking Bad' />
                        <div className='coverTitle'><h1>Breaking Bad</h1></div>
                    </div>
                    <div className='coverImage'>
                        <img src={DeathNote} className='cover' alt='Death Note' />
                        <div className='coverTitle'><h1>Death Note</h1></div>
                    </div>
                </div>
                <div className='coverContainer'>
                    <div className='coverImage'>
                        <img src={GameOfThrones} className='cover' alt='Game of Thrones' />
                        <div className='coverTitle'><h1>Game of Thrones</h1></div>
                    </div>
                    <div className='coverImage'>
                        <img src={TheWalkingDead} className='cover' alt='The Walking Dead' />
                        <div className='coverTitle'><h1>The Walking Dead</h1></div>
                    </div>
                    <div className='coverImage'>
                        <img src={TheWire} className='cover' alt='The Wire' />
                        <div className='coverTitle'><h1>The Wire</h1></div>
                    </div>
                </div>
            </div>
        )
    }

}