import React from 'react';
import { Container } from 'reactstrap';

import Header from './../components/Header';
import ListGames from './../components/Games/List.js';

const Games = () => {
    return (
        <main>
            <Container>
                <ListGames />
            </Container>
        </main>
    )
}

export default Games;