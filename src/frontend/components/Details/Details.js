import React from 'react';
import {Link} from 'react-router-dom';
import './Details.css';
 
class Details extends React.Component {
    render() {
        return (
            <div id='details'>
                <h1>Hello, this will be the details page for each Movie & TV show :)</h1> 
                <button className='buttonBackHome' onClick={this.onNavigateHome}>
                    <Link to={'/'} className='backHome'><h3>Home</h3></Link>
                </button>
            </div >
        );
    }
}
export default Details;