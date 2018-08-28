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
        synopsis: `Black Mirror is a British science fiction anthology television series 
        created by Charlie Brooker, with Brooker and Annabel Jones serving 
        as the programme showrunners. It examines modern society, particularly 
        with regard to the unanticipated consequences of new technologies.`,
        id: 'black-miror'
    }, {
        title: 'Breaking Bad',
        image: BreakingBad,
        synopsis: `Breaking Bad is an American neo-Western crime drama television series 
        created and produced by Vince Gilligan and is widely regarded 
        as one of the greatest television series of all time.
        The series tells the story of Walter White (Bryan Cranston), 
        a struggling and depressed high school chemistry teacher diagnosed with lung cancer. 
        Together with his former student Jesse Pinkman (Aaron Paul), 
        White turns to a life of crime by producing and selling crystallized methamphetamine 
        to secure his family's financial future before he dies, 
        while navigating the dangers of the criminal world. 
        The title comes from the Southern colloquialism "breaking bad", 
        meaning to "raise hell" or turn toward crime.`,
        id: 'breaking-bad'
    }, {
        title: 'Death Note',
        image: DeathNote,
        synopsis: `Light Yagami (Tatsuya Fujiwara) is a normal, 
        undistinguished college student -- that is, until he discovers an odd notebook 
        lying on the ground. He soon discovers that the notebook has magic powers: 
        If someone's name is written on it while the writer imagines that person's face, 
        he or she will die. Intoxicated with his new godlike power, 
        Light kills those he deems unworthy of life. But a mysterious detective known only 
        as L (Ken'ichi Matsuyama) becomes determined to put a stop to his reign.`,
        id: 'death-note'
    }, {
        title: 'Game of Thrones',
        image: GameOfThrones,
        synopsis: `In the Game of Thrones, you either win or you die. 
        Nine noble families fight for control of the mythical land of Westeros. 
        Political and sexual intrigue is pervasive. 
        Robert Baratheon, King of Westeros, asks his old friend Eddard, 
        Lord Stark, to serve as Hand of the King, or highest official.`,
        id: 'game-of-thrones'
    }, {
        title: 'The Walking Dead',
        image: TheWalkingDead,
        synopsis: `The Walking Dead is an American post-apocalyptic horror television series 
        developed by Frank Darabont for AMC that is based on the comic book series 
        of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard. 
        Andrew Lincoln plays the show's lead character, sheriff's deputy Rick Grimes, 
        who awakens from a coma discovering a world overrun by zombies, 
        commonly referred to as "walkers". Grimes reunites with his family 
        and becomes the leader of a group he forms with other survivors. 
        Together they struggle to survive and adapt in a post-apocalyptic world filled 
        with walkers and opposing groups of survivors, 
        who are often more dangerous than the walkers themselves.`,
        id: 'the-walking-dead'
    }, {
        title: 'The Wire',
        image: TheWire,
        synopsis: `The Wire is an American crime drama television series created 
        and primarily written by author and former police reporter David Simon.
        Set and produced in Baltimore, Maryland, The Wire introduces a different institution 
        of the city and its relationship to law enforcement in each season, 
        while retaining characters and advancing storylines from previous seasons. 
        The five subjects are, in chronological order: the illegal drug trade, 
        the seaport system, the city government and bureaucracy, education and schools, 
        and the print news media. The large cast consists mainly of actors who are little known 
        for their other roles, as well as numerous real-life Baltimore and Maryland figures 
        in guest and recurring roles. Simon has said that despite its framing as a crime drama, 
        the show is "really about the American city, and about how we live together. 
        It's about how institutions have an effect on individuals. Whether one is a cop, 
        a longshoreman, a drug dealer, a politician, a judge or a lawyer, 
        all are ultimately compromised and must contend with whatever institution to 
        which they are committed."`,
        id: 'the-wire'
    }];
}
export default getShows;