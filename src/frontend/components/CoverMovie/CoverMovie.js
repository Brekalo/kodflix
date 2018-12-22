import React from 'react';
import CoverGallery from '../coverGallery/CoverGallery';
import Loading from '../common/loading/Loading';

class CoverMovie extends React.Component {

    constructor() {
        super();
        this.state = { shows: [] };
    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(response => response.json())
            .then(shows => this.setState({ shows }));
    }

    render() {
        return (
            <div className='coverRow'> {
                this.state.shows.length ?
                    this.state.shows.map(show => {
                        return (
                            <CoverGallery key={show.id} id={show.id} title={show.title} />
                        );
                    }) :
                    <Loading />
            }
            </div>
        );
    }
}

export default CoverMovie;