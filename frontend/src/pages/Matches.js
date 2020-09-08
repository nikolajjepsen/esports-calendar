import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ListMatches from './../components/Matches/List.js';
import Header from './../components/Header';

const Matches = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <ListMatches />
                </Row>
            </Container>
        </>
    )
}

export default Matches;