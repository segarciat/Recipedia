import { Row, Col, FloatingLabel, Form } from 'react-bootstrap';

const units = [
  { value: 'grams', name: 'g' },
  { value: 'ounces', name: 'oz' },
  { value: 'cups', name: 'cups' },
];

const IngredientInput = () => {
  return (
    <Row>
      <Col md={10}>
        <FloatingLabel
          controlId="floatingInput"
          label="Ingredient"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="sugar" />
        </FloatingLabel>
      </Col>
      <Col md={4}>
        <FloatingLabel
          controlId="floatingInput"
          label="Amount"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="3" />
        </FloatingLabel>
      </Col>
      <Col md={4}>
        <Form.Select className="py-3" aria-label="Default select example">
          <option value="">Units</option>
          {units.map(({ value, name }, i) => (
            <option key={i} value={value}>
              {name}
            </option>
          ))}
        </Form.Select>
      </Col>
    </Row>
  );
};

export default IngredientInput;
