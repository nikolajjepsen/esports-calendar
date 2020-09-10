import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import apiService from './../../services/api';

import Game from './Game';
const ListGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const getGames = async() => {
            const games = await apiService.get("api/games");
            setGames(games.data);
        }
        getGames();
    }, []);

    const toggleFollowStatus = async (id) => {
        let isSubscribed;
        let newGameState = games.map(game => {
            const temp = Object.assign({}, game);
            if (temp.id === id) {
                isSubscribed = temp.user_is_subscribed;
                temp.user_is_subscribed = !temp.user_is_subscribed
            }
            return temp;
        })
        let response;
        try {
            response = isSubscribed
                ? await apiService.delete(`/api/games/${id}/subscription`)
                : await apiService.post(`/api/games/subscription`, 
                    { game_id: id },
                );

            if (response) {
                setGames(newGameState);
            }
        } catch (err) {
            console.log(err);
        }
        
    }

    return (
        <Row>
            {games.map((game) => (
                <Col sm={4}>
                    <Game
                        id={game.id}
                        name={game.name}
                        developer={game.developer}
                        description={game.description}
                        logo_path={game.logo_path}
                        loaded={games.length > 0 ? true : false}
                        subscribed={
                            game.user_is_subscribed
                                ? game.user_is_subscribed
                                : false
                        }
                        toggleFollowStatus={toggleFollowStatus}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default ListGames;