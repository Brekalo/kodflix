import React from 'react';
import CoverGallery from '../CoverGallery/CoverGallery';
import getShows from '../Shows/Shows';

class CoverMovie extends React.Component {
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