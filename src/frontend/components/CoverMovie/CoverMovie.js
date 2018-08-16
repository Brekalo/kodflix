import React from 'react';
import CoverGallery from '../CoverGallery/CoverGallery';
import getCoverMovie from './CoverMovie-get';

class CoverMovie extends React.Component {
    render(){
        return (
            <div className='coverRow'> {                    
                getCoverMovie().map(coverImage => {
                    return (
                        <CoverGallery 
                        title={coverImage.title}
                        image={coverImage.image} 
                        id={coverImage.id} 
                        key={coverImage.id} />
                        );
                    })
                }
            </div>
         );
     }
 }
export default CoverMovie;