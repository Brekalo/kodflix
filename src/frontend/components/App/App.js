import React from 'react';
import CoverMovie from '../CoverMovie/CoverMovie';
import Details from '../Details/Details.js';
import './App.css';
import Welcome from '../Welcome/Welcome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

class App extends React.Component {
    render() {
        return (
           <Router> 
                <div className='App'>
                <Welcome />
                <Switch >
                    <Route exact path='/' component={CoverMovie} />
                    <Route path='/notFound' component={NotFound} />
                    <Route path='/:showId' component={Details} />
                </Switch>
                </div> 
            </Router>
        );
    }
}
export default App;