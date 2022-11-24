import { Form, Container, Row, Col } from 'react-bootstrap';

const RecipeForm = () => {
  return (
    <Container className="border border-3">
      <Row className="justify-content-center">
        <h3 className="text-center mt-4">Basic Details</h3>
        <Col md={8}>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formGroupRecipeName"
            >
              <Form.Label column sm={2}>
                Recipe Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  required
                  type="text"
                  placeholder="e.g., Brownies"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formGroupBriefSummary"
            >
              <Form.Label column sm={2}>
                Brief Summary
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  required
                  type="text"
                  placeholder="e.g., Crispy outside, fudgy inside"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formFile" className="mb-3">
              <Form.Label column sm={2}>
                Recipe Image
              </Form.Label>
              <Col>
                <Form.Control accept="image/*" type="file" />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeForm;
