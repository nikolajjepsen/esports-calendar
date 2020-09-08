import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link 
} from 'react-router-dom';

import Games from './pages/Games';
import Matches from './pages/Matches';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

import './App.scss';

import { AuthenticationProvider } from "./context/AuthenticationIndex";

const App = () => {
    return (
        <AuthenticationProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Matches} />
                    <Route path="/games" component={Games} />
                    <Route path="/login" component={Login} />
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </AuthenticationProvider>
    );
}

export default App;
