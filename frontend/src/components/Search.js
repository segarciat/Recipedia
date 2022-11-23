import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

const Search = ({ query, setQuery }) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={9}>
              <Form.Control
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
