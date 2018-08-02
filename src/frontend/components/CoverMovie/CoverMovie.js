import React from 'react';
import BlackMirror from '../../images/BlackMirror.jpg';
import BreakingBad from '../../images/BreakingBad.jpg';
import DeathNote from '../../images/DeathNote.jpg';
import GameOfThrones from '../../images/GameOfThrones.jpg';
import TheWalkingDead from '../../images/TheWalkingDead.jpg';
import TheWire from '../../images/TheWire.jpg';
import CoverGallery from '../CoverGallery/CoverGallery';

class CoverMovie extends React.Component {
    render(){
        return (
            <div>
                <div className='coverRow'>
                    <CoverGallery image={BlackMirror} Title='Black Mirror' id='black-miror'/>
                    <CoverGallery image={BreakingBad} Title='Breaking Bad' id='breaking-bad'/>
                    <CoverGallery image={DeathNote} Title='Death Note' id='death-note'/>  
                </div>
                <div className='coverRow'>
                    <CoverGallery image={GameOfThrones} Title='Game of Thrones' id='game-of-thrones'/>
                    <CoverGallery image={TheWalkingDead} Title='The Walking Dead' id='the-walking-dead'/>
                    <CoverGallery image={TheWire} Title='The Wire' id='the-wire'/>  
                </div>
            </div>
        )
    }
}
export default CoverMovie;