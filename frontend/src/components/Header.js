import React from 'react';

import { Button } from 'reactstrap';
import { UserPlus as UserPlusIcon, LogOut as LogOutIcon } from 'react-feather'; 

import {
    Link,
    useHistory
} from 'react-router-dom';

import './Header.scss';

import { useAuthenticationStateContext, useAuthenticationDispatchContext, logout } from './../context/AuthenticationIndex';

const Header = () => {
    const dispatch = useAuthenticationDispatchContext();
    let { user } = useAuthenticationStateContext();
    user = (user && user !== null) ? user : null;
    const history = useHistory();

    const handleLogout = async () => {
        await logout(dispatch);
        history.replace("/");
    }

    return (
        <header>
            <section className="left">
                <nav>
                    <Link className="brand" to="/">
                        Tracket
                    </Link>
                    <ul>
                        <li>
                            <Link to="/">Matches</Link>
                        </li>
                        <li>
                            <Link to="/games">Games</Link>
                        </li>
                        <li>
                            <Link to="/tournaments">Tournaments</Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className="right">
                {!user && (
                    <nav>
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Button
                                    className="has-icon"
                                    color="success"
                                    size="sm"
                                    outline
                                    tag={Link}
                                    to="/signup"
                                >
                                    <span>Signup</span>{" "}
                                    {<UserPlusIcon size="16" />}
                                </Button>
                            </li>
                        </ul>
                    </nav>
                )}
                {user && (
                    <nav>
                        <ul>
                            <li>Hello, {user.name}</li>
                            <li>
                                <Button
                                    className="has-icon"
                                    color="success"
                                    size="sm"
                                    outline
                                    onClick={handleLogout}
                                >
                                    <span>Logout</span>{" "}
                                    {<LogOutIcon size="16" />}
                                </Button>
                            </li>
                        </ul>
                    </nav>
                )}
            </section>
        </header>
    );
}

export default Header;
