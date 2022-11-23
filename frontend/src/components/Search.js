import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={8}>
          <Form>
            <Row>
              <Col xs={9}>
                <Form.Control placeholder="Search recipes..." />
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
