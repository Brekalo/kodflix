import React from 'react';
import CoverMovie from '../coverMovie/CoverMovie';
import Details from '../details/Details.js';
import './App.css';
import Welcome from '../welcome/Welcome';
import { Switch, Route, withRouter } from 'react-router-dom';
import NotFound from '../notFound/NotFound';
import ReactGA from 'react-ga';

class App extends React.Component {
    constructor({ history, location }) {
        super();
        ReactGA.initialize('UA-135370186-1');
        this.trackPageView(location);
        history.listen((location) => this.trackPageView(location));
    }

    trackPageView(location) {
        ReactGA.pageview(location.pathname + location.search + location.hash);
    }

    render() {
        return (
            <div className='App'>
                <Welcome />
                <Switch >
                    <Route exact path='/' component={CoverMovie} />
                    <Route path='/notFound' component={NotFound} />
                    <Route path='/:showId' component={Details} />
                </Switch>
            </div>
        );
    }
}
export default withRouter(App);