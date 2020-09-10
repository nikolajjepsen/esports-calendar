import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import moment from "moment";

import './Match.scss';

const Match = ({ teamOne, teamTwo, game, startsAt, id, className}) => {
    
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const momentStartsAt = moment(startsAt);

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
        <Row className={`match-container ${className ? className : ''}`}>
            <Col sm={6} lg={3}>
                { game && (
                    <div className="tournament-details">
                        <div className="game"><img src="https://luckbox.com/e3c8311098b00ce85583f2320ea7d425.png" alt={game.name} /></div>
                        <div className="tournament">
                            <span className="tournament-name">Tournaments Name</span>
                            <span className="tournament-format">Tournament Format</span>
                        </div>
                    </div>
                )}
            </Col>
            <Col sm={12} lg={6}>
                <div className="match-details">
                    <div className="team-wrapper" title={teamOne.name}>
                        <span className="team-name">{teamOne.name}</span>
                    </div>
                    <div className="middle-section">
                        <span className="middle-content">vs</span>
                    </div>
                    <div className="team-wrapper" title={teamTwo.name}>
                        <span className="team-name">{teamTwo.name}</span>
                    </div>
                </div>
            </Col>
            <Col sm={6} lg={3}>
                {
                    startsAt && (
                        <div className="schedule-details">
                            <span className="starts_in" title={startsAt}>
                                {momentStartsAt.from(currentDateTime)}
                            </span>
                            <span className="starts_at">
                                {momentStartsAt.format("HH:mm, Do MMM")}
                            </span>
                        </div>
                    )
                }
            </Col>
        </Row>
    );
}

export default Match;