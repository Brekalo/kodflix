import React from 'react'

export default class CoverGallery extends React.Component {
    render() {
        return (
            <div className='coverImage'>
                <img src={this.props.image} className='cover' alt='{this.props.Title}' />
                <div className='coverTitle'><h1>{this.props.Title}</h1></div>
            </div>
        )
    }
}