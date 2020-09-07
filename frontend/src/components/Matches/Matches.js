import React, { useState } from 'react';
import Match from './Match';
import Header from './../Header';

const Matches = () => {
    const [matches, setMatches] = useState([
        {
            'id': 1,
            'home': 'TSM',
            'away': 'Cloud9',
            'tournament': 'ECS Season 10',
            'starts_at': '2020-09-07 19:00',
            'game': 'csgo',
        },
        {
            'id': 1,
            'home': 'TSM',
            'away': 'Cloud9',
            'tournament': 'ECS Season 10',
            'starts_at': '2020-09-07 19:00',
            'game': 'csgo',
        },
        {
            'id': 1,
            'home': 'TSM',
            'away': 'Cloud9',
            'tournament': 'ECS Season 10',
            'starts_at': '2020-09-07 19:00',
            'game': 'csgo',
        },
    ]);

    return (
        <>
            <Header />
            <div className="matches-container">
                    {
                        matches.map((element) => (
                            <Match key={element.id} matchData={element} />
                        ))
                    }
            </div>
        </>
    )
}

export default Matches;