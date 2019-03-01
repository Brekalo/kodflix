import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './Details.css';
import Loading from '../common/loading/Loading';

class Details extends React.Component {
    constructor() {
        super();
        this.state = { show: {} };
    }

    componentDidMount() {
        let showId = this.props.match.params.showId;
        fetch(`/rest/shows/${showId}`)
            .then(response => response.json())
            .then(show => this.setState({ show }));
    }

    render() {
        let show = this.state.show;
        if (show) {
            return show.id ?
                <DetailsContent show={show} /> :
                <Loading />;
        } else {
            return <Redirect to='/not-found' />;
        }
    }
}

const DetailsContent = ({ show }) => {
    return (
        <div className='details'>
            <div className='details-movie'>
                <h1>{show.title}</h1>
                <div className='details-movie-content'>
                    <h3 className='details-movie-content-synopsis'>
                        {show.synopsis}
                    </h3>
                    <div className='details-movie-content-cover'>
                        <img
                            src={require(`../common/images/${show.id}.jpg`)}
                            alt={show.title} />
                    </div>
                </div>
                <div className='btn'>
                    <hr class="style1"></hr>
                    <button className='btn-BackHome'>
                        <Link to={'/'} className='backHome'><h4>Home</h4></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Details; 