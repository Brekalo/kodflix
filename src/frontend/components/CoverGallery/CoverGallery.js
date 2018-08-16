import React from 'react';
import {Link} from 'react-router-dom';
import './CoverGallery.css';


function CoverGallery (props) {
    return (
        <Link to={`/${props.id}`} className='coverImage'>
            <img src={props.image} className='cover' alt={props.title} />
            <div className='coverTitle'><h1>{props.title}</h1></div>
        </Link>
    )
}
export default CoverGallery;