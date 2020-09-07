import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link 
} from 'react-router-dom';

import Home from './pages/Home';
import Games from './pages/Games';
import Matches from './components/Matches/Matches';
import NotFound from './pages/NotFound';

import './App.scss';

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/games" component={Games} />
                    <Route path="/matches" component={Matches} />
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
