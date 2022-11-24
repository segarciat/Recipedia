import { Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap';

const IngredientInput = ({ handleDelete }) => {
  return (
    <Row>
      <Col md={6}>
        <FloatingLabel
          controlId="floatingInput"
          label="Ingredient"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="sugar" />
        </FloatingLabel>
      </Col>
      <Col md={2}>
        <FloatingLabel
          controlId="floatingInput"
          label="Amount"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="3" />
        </FloatingLabel>
      </Col>
      <Col md={2}>
        <Form.Select className="py-3" aria-label="Default select example">
          <option value="">Units</option>
          <option value="grams">g</option>
          <option value="ounces">oz</option>
          <option value="cups">cups</option>
        </Form.Select>
      </Col>
      <Col md={2}>
        <Button className="py-3" variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Col>
    </Row>
  );
};

export default IngredientInput;
