import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

function GCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/CODBO6.png" />
      <Card.Body>
        <Card.Title>Call of Duty: Black Ops 6</Card.Title>
        <Card.Text>
            Stars: 4  
            Released: 2024
            Exciting shooting game and to play online!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default GCard;