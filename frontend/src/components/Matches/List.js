import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';

import Match from './Match';

import apiClient from '../../services/api';

import { useAuthenticationStateContext } from './../../context/AuthenticationIndex';

const ListMatches = () => {
    const { user } = useAuthenticationStateContext();
    const [matches, setMatches] = useState([]);

    useEffect( () => {
        const fetchCateredMatches = async () => {
            try {
                let response = await apiClient.get(
                    user 
                        ? "/api/games/subscription/matches" 
                        : 'api/matches'
                );
                if (response && response.status == 200) {
                    setMatches(response.data);
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
                        <Match key={element.id} matchData={element} />
                    </Col>
                ))
            }
        </>
    )
}

export default ListMatches;