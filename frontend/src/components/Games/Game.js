import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardFooter, CardSubtitle, CardText, Button } from 'reactstrap';

import { Heart } from 'react-feather';

import './Game.scss';

const Game = (props) => {
    const { name, developer, description, logo_path, subscribed } = props;
    return (
        <Card className="game-card">
            <CardImg top width="100%" src={logo_path} alt={`${name} logo`} />
            <CardBody className="text-dark">
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{developer}</CardSubtitle>
                <CardText>{description}</CardText>
            </CardBody>
            <CardFooter>
                <Button className="has-icon" color="danger">
                    {
                        <Heart
                            size={18}
                            fill={subscribed ? "white" : "none"}
                            color="white"
                        />
                    }
                    <span>{subscribed ? "Following" : "Follow"}</span>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default Game;