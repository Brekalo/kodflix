import React from 'react';
import {Link} from 'react-router-dom';
import './CoverGallery.css';


class CoverGallery extends React.Component {
    render() {
        return (
            <Link to='/details' className='coverImage'>
                <img src={this.props.image} className='cover' alt='{this.props.Title}' />
                <div className='coverTitle'><h1>{this.props.Title}</h1></div>
            </Link>
        )
    }
}
export default CoverGallery;