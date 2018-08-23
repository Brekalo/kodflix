import React from 'react';
import {Link} from 'react-router-dom';
import './Details.css';
import getShows from '../Shows/Shows';
 
class Details extends React.Component {

    constructor() {
        super();
        this.state = { show: {} };
    }
    
    componentDidMount() {
        let show = getShows()
            .find(show => show.id === this.props.match.params.showId);
        this.setState({ show });
    }

    render() {
        return (
            <div id='details'>
              <h1>{this.state.show.title}</h1>
              <button className='buttonBackHome'>
              <Link to={'/'} className='backHome'><h3>Home</h3></Link>
            </button>
            </div>
        );
    }
}
export default Details; 