import React from 'react';
import CoverGallery from '../CoverGallery/CoverGallery';
// import getShows from '../Shows/Shows';

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
    
    render(){
        return (
            <div className='coverRow'> {                    
                this.state.shows.map(show => {
                    return (
                        <CoverGallery 
                        title={show.title}
                        id={show.id} 
                        key={show.id} />
                        );
                    })
                }
            </div>
        );
    }
}

export default CoverMovie;