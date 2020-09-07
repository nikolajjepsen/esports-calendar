import React from 'react';

import { Button } from 'reactstrap';

import {
    Link
} from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <section className="left">
                <nav>
                    <Link className="brand" to="/">Tracket</Link>
                    <ul>
                        <li>
                            <Link to="/">Matches</Link>
                        </li>
                        <li>
                            <Link to="/games">Games</Link>
                        </li>
                        <li>
                            <Link to="/matches">Matches</Link>
                        </li>
                        <li>
                            <Link to="/tournaments">Tournaments</Link>
                        </li>                    
                    </ul>
                </nav>
            </section>
            <section className="right">
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Button color="light" size="sm" outline tag={Link} to="/signup">Signup</Button>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header;
