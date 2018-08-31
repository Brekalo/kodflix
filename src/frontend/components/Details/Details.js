import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
import getShows from '../Shows/Shows';
import { Redirect } from 'react-router-dom';

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
        let show = this.state.show;
        return (
            this.state.show ?
            <div className='details'>
                    <div className='details-movie'>
                        <h1>{show.title}</h1>
                        <div className='details-movie-content'>
                            <h3 className='details-movie-content-synopsis'>
                                {show.synopsis}
                            </h3>
                            <div className='details-movie-content-cover'>
                                <img src={show.image} alt={show.title}/>
                            </div>
                        </div>
                        <div className='btn'>
                            <hr class="style1"></hr>
                                <button className='btn-BackHome'>
                                    <Link to={'/'} className='backHome'><h4>Home</h4></Link>
                                </button>
                        </div>
                    </div>
            </div> :
            <Redirect to='/notFound' />
        )
    }
}
export default Details; 