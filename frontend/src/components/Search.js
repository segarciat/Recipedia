import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const Search = ({ query, setQuery, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                />
              </Col>
              <Col>
                <Button variant="secondary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
