import React from 'react';
import { Container, Row } from 'reactstrap';

import ListMatches from './../components/Matches/List.js';

const Matches = () => {
    return (
        <main>
            <Container class="content-wrapper">
                <Row>
                    <ListMatches />
                </Row>
            </Container>
        </main>
    )
}

export default Matches;