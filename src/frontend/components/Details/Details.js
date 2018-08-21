import React from 'react';
import {Link} from 'react-router-dom';
import './Details.css';
 
class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            message: 'Hello, this will be the details page for each Movie & TV show :)'
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({ message: 'Coming soon! :)' });
        }, 3000);
    }

    render() {
        return (
            <div id='details'>
              <h1>{this.state.message}</h1>
              <button className='buttonBackHome' onClick={this.onNavigateHome}>
              <Link to={'/'} className='backHome'><h3>Home</h3></Link>
            </button>
            </div>
        );
    }
}
export default Details; 