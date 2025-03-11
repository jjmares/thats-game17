import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { GameItem } from '../types';

import 'bootstrap/dist/css/bootstrap.min.css';

type GCardProps = {
  game: GameItem;
};

function GCard({ game }: GCardProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>
            Stars: {game.stars} <br/>
            Genre: {game.genre}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}


export default GCard;

