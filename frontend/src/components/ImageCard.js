import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ title, description }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.REACT_APP_EMPTY_PHOTO_URL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">View Recipe</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
