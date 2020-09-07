import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './../components/Header';

const Home = () => {
    return (
        <main id="home">
            <Header />
            <Container>
                <Row>
                    <Col>
                        <p>Home</p>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Home;