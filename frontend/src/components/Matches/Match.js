import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import moment from "moment";

import './Match.scss';

const Match = (props) => {
    const { home, away, tournament, game, starts_at } = props.matchData;
    const momentStartsAt = moment(starts_at);

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        let currentTimeInterval;
        // Set an interval to update current time every 10 seconds.
        currentTimeInterval = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 10000);

        // clean up the interval on unmount.
        return () => {
          window.clearInterval(currentTimeInterval);
        };
    }, [])

    // effect with current time as dependency, if any match has starts_at > current time, re-fetch the matches.

    return (
        <Row className="match-container">
            <Col sm={6} lg={4}>
                <div className="tournament-details">
                    <div className="game"><img src="https://luckbox.com/e3c8311098b00ce85583f2320ea7d425.png" /></div>
                    <div className="tournament">
                        <span className="tournament-name">{tournament}</span>
                        <span className="tournament-format">Swiss BO3</span>
                    </div>
                </div>
            </Col>
            <Col sm={12} lg={4}>
                <div className="match-details">
                    <div className="team-wrapper" title={home}>
                        <span className="team-name">{home}</span>
                    </div>
                    <div className="middle-section">
                        <span className="middle-content">vs</span>
                    </div>
                    <div className="team-wrapper" title={away}>
                        <span className="team-name">{away}</span>
                    </div>
                </div>
            </Col>
            <Col sm={6} lg={4}>
                <div className="schedule-details">
                    <span className="starts_in" title={starts_at}>
                        {momentStartsAt.from(currentDateTime)}
                    </span>
                    <span className="starts_at">
                        {momentStartsAt.format("HH:mm, Do MMM")}
                    </span>
                </div>
            </Col>
        </Row>
    );
}

export default Match;