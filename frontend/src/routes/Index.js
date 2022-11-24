import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Welcome from '../components/Welcome';

const Index = () => {
  return (
    <Container>
      <Welcome />
      <Row xs={1} md={2} className="justify-content-center">
        <Col md={6} lg={2} className="d-flex justify-content-center">
          <Button as={Link} to="/gallery" variant="secondary" size="lg">
            View Gallery
          </Button>
        </Col>
        <Col md={6} lg={2} className="d-flex justify-content-center">
          <Button as={Link} to="/recipe" variant="success" size="lg">
            Create Recipe
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
