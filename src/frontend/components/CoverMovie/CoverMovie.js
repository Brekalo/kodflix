import React from 'react';
import CoverGallery from '../CoverGallery/CoverGallery';
import getShows from '../Shows/Shows';

class CoverMovie extends React.Component {
    
    componentDidMount() {
        fetch('/rest/shows')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
            console.log(myJson);
            });
    }
    
    render(){
        return (
            <div className='coverRow'> {                    
                getShows().map(show => {
                    return (
                        <CoverGallery 
                        title={show.title}
                        image={show.image} 
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