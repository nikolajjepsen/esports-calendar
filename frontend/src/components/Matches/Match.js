import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Match.scss';

const Match = (props) => {
    const { home, away, tournament, game, starts_at } = props.matchData;
    return (
        <div className="match-container">
            <Row>
                <Col sm={6} lg={4}>
                    <div className="game-details">
                        <span className="game">{game}</span>
                        <span className="tournament">{tournament}</span>
                    </div>
                </Col>
                <Col sm={12} lg={4}>
                    <div classNames="team-details">
                        <span className="home">{home}</span>
                        <span className="vs">vs</span>
                        <span className="away">{away}</span>
                    </div>
                </Col>
                <Col sm={6} lg={4}>
                    <div className="schedule-details">
                        <span className="starts_at">{starts_at}</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Match;