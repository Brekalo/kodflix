import React from 'react';
import {Link} from 'react-router-dom';
import './CoverGallery.css';

class CoverGallery extends React.Component {

    render() {
        let { id, title } = this.props;

        return (
            <Link to={`/${id}`} className='coverImage'>
                <img src={require(`../../images/${id}.jpg`)}
                    alt={title} />
                <div className='coverTitle'>
                    <h1>{title}</h1>
                </div>
            </Link>
        )
    }
}

export default CoverGallery;