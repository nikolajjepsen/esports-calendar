import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import Game from './Game';

const ListGames = () => {
    const [games, setGames] = useState([]);

    useEffect( () => {
        const games = [
            {
                'id': 1,
                'name': 'Counter-Strike: Global Offensive',
                'description': `
                    Rerum architecto explicabo ut et. Sint doloremque dolor reprehenderit cupiditate debitis ipsam. 
                    Quo in aut suscipit est occaecati tempora esse. Qui quaerat temporibus laboriosam dolorem assumenda ea. 
                    Eos laboriosam dolorem at quisquam unde. Est iste voluptatem non.
                `,
                'developer': 'Valve Inc.',
                'logo_path': 'https://esportsjunkie.com/wp-content/uploads/2019/05/CSGO-Banner-24-3-2019.jpg',
                'subscribed': true,
            },
            {
                'id': 2,
                'name': 'League of Legends',
                'description': `
                    Rerum architecto explicabo ut et. Sint doloremque dolor reprehenderit cupiditate debitis ipsam. 
                    Quo in aut suscipit est occaecati tempora esse. Qui quaerat temporibus laboriosam dolorem assumenda ea. 
                    Eos laboriosam dolorem at quisquam unde. Est iste voluptatem non.
                `,
                'developer': 'Riot Games Inc.',
                'logo_path': 'https://nexus.leagueoflegends.com/wp-content/uploads/2019/06/Banner_T2_Image_tnp3w61gzna8r2n3rojp.jpg',
                subscribed: false
            },
        ];

        setGames(games);
    }, [])

    return (
        <Row>
            {
                games.map((game) => (
                    <Col sm={4}>
                        <Game 
                            key={game.id}
                            name={game.name}
                            developer={game.developer}
                            description={game.description}
                            logo_path={game.logo_path}
                            subscribed={game.subscribed}
                        />
                    </Col>
                ))
            }
        </Row>
    )
}

export default ListGames;