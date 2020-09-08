import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import apiClient from './../../services/api';

import Match from './Match';

const ListMatches = () => {
    const [matches, setMatches] = useState([
        {
            id: 1,
            home: "Astralis",
            away: "Team Liquid",
            tournament: "ESL Road to Rio",
            starts_at: "2020-09-08 19:00",
            game: "csgo",
        },
        {
            id: 2,
            home: "MIBR",
            away: "Astralis",
            tournament: "ESL Road to Rio",
            starts_at: "2020-09-15 19:00",
            game: "csgo",
        },
        {
            id: 3,
            home: "Astralis",
            away: "Cloud9",
            tournament: "ESL Road to Rio",
            starts_at: "2020-09-18 19:00",
            game: "csgo",
        },
        {
            id: 4,
            home: "Fnatic",
            away: "Astralis",
            tournament: "ESL Road to Rio",
            starts_at: "2020-09-08 09:37",
            game: "csgo",
        },
    ]);

    useEffect( () => {
        /*apiClient
            .get('/api/matches')
            .then(response => {
                console.log(response);
            })*/
    }, [])

    return (
        <>
            {
                matches.map((element) => (
                    <Col sm={12} key={element.id}>
                        <Match key={element.id} matchData={element} />
                    </Col>
                ))
            }
        </>
    )
}

export default ListMatches;