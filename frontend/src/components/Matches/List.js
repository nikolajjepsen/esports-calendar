import React, { useState, useEffect } from 'react';
import { Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LogIn as LogInIcon } from 'react-feather';

import Match from './Match';
import apiService from '../../services/api';
import { useAuthenticationStateContext, useAuthenticationDispatchContext } from './../../context/AuthenticationIndex';

const ListMatches = () => {
    const { user } = useAuthenticationStateContext();
    const [matches, setMatches] = useState([]);

    useEffect( () => {
        const fetchCateredMatches = async () => {
            try {
                let response = await apiService.get(
                    user 
                        ? '/api/games/subscription/matches' 
                        : '/api/matches'
                );
                if (response && response.status == 200) {
                    console.log(response.data.data);
                    setMatches(response.data.data);
                }
            } catch (err) {
                console.error(err);
            }
        }

        fetchCateredMatches();
    }, [])

    return (
        <>
            {
                matches.map((element) => (
                    <Col sm={12} key={element.id}>
                        <Match 
                            key={element.id} 
                            teamOne={element.team_one}
                            teamTwo={element.team_two}
                            game={element.game}
                            startsAt={element.starts_at}
                        />
                    </Col>
                ))
            }
            {
                !user && (
                    <>
                        <Col sm={12}>
                            <Match
                                className="empty-match"
                                teamOne
                                teamTwo
                            />
                        </Col>
                        <Col md={{ size: 6, offset: 3 }} className="unauthenticated-container">
                            <h5>Login to view more matches</h5>
                            <p>
                                See all upcoming matches, subscribe to games and teams to get a catered list of upcoming matches
                                that fits your interests! 
                            </p>
                            <Button
                                className="has-icon"
                                color="success"
                                outline
                                tag={Link}
                                to="/login"
                            >
                                <span>Login</span>
                                {<LogInIcon size="16" />}
                            </Button>
                        </Col>
                    </>
                )
            }
        </>
    )
}

export default ListMatches;