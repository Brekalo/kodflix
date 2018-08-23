import BlackMirror from '../../images/BlackMirror.jpg';
import BreakingBad from '../../images/BreakingBad.jpg';
import DeathNote from '../../images/DeathNote.jpg';
import GameOfThrones from '../../images/GameOfThrones.jpg';
import TheWalkingDead from '../../images/TheWalkingDead.jpg';
import TheWire from '../../images/TheWire.jpg';

function getShows() {
    return [{
        title: 'Black Mirror',
        image: BlackMirror,
        id: 'black-miror'
    }, {
        title: 'Breaking Bad',
        image: BreakingBad,
        id: 'breaking-bad'
    }, {
        title: 'Death Note',
        image: DeathNote,
        id: 'death-note'
    }, {
        title: 'Game of Thrones',
        image: GameOfThrones,
        id: 'game-of-thrones'
    }, {
        title: 'The Walking Dead',
        image: TheWalkingDead,
        id: 'the-walking-dead'
    }, {
        title: 'The Wire',
        image: TheWire,
        id: 'the-wire'
    }];
}
export default getShows;