import React from 'react';
import CoverMovie from '../coverMovie/CoverMovie';
import Details from '../details/Details.js';
import './App.css';
import Welcome from '../welcome/Welcome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from '../notFound/NotFound';

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