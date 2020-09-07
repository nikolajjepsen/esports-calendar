import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './../components/Header';

const Games = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <p>Games</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Games;