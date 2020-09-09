import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route,
    withRouter
} from 'react-router-dom';
import Header from "./components/Header";
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group'


import Games from './pages/Games';
import Matches from './pages/Matches';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

import 'animate.css/animate.min.css';
import './App.scss';

import { AuthenticationProvider } from "./context/AuthenticationIndex";


const AnimatedSwitch = withRouter(( { location }) => {
    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="route-transition" timeout={500}>
                <Switch>
                    <Route path="/" exact>
                        <Matches />
                    </Route>
                    <Route path="/games">
                        <Games />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
});


const App = () => {
    return (
        <AuthenticationProvider>
            <Router>
                <Header />
                <AnimatedSwitch />
            </Router>
        </AuthenticationProvider>
    );
}

export default App;
