import React from 'react';
import { Container } from 'reactstrap';

import Header from './../components/Header';
import ListGames from './../components/Games/List.js';

const Games = () => {
    return (
        <>
            <Header />
            <Container>
                <ListGames />
            </Container>
        </>
    )
}

export default Games;