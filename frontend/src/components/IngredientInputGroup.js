import { Row, Col, FloatingLabel, Form } from 'react-bootstrap';

const units = [
  { value: 'grams', name: 'g' },
  { value: 'ounces', name: 'oz' },
  { value: 'cups', name: 'cups' },
];

const INGREDIENT_NAME = 'ingredientName';
const INGREDIENT_AMOUNT = 'ingredientAmount';
const INGREDIENT_AMOUNT_UNIT = 'ingredientAmountUnit';

const IngredientInputGroup = ({ isReadOnly, fields, handleChange }) => {
  return (
    <Row>
      <Col md={10}>
        <FloatingLabel
          controlId="floatingInput"
          label="Ingredient"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="sugar"
            name={INGREDIENT_NAME}
            readOnly={!!isReadOnly}
            disabled={!!isReadOnly}
            value={fields[INGREDIENT_NAME]}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
      </Col>
      <Col md={4}>
        <FloatingLabel
          controlId="floatingInput"
          label="Amount"
          className="mb-3"
        >
          <Form.Control
            type="number"
            placeholder="3"
            readOnly={!!isReadOnly}
            disabled={!!isReadOnly}
            name={INGREDIENT_AMOUNT}
            value={fields[INGREDIENT_AMOUNT]}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
      </Col>
      <Col md={4}>
        <Form.Select
          className="py-3"
          aria-label="Default select example"
          readOnly={!!isReadOnly}
          disabled={!!isReadOnly}
          name={INGREDIENT_AMOUNT_UNIT}
          value={fields[INGREDIENT_AMOUNT_UNIT]}
          onChange={handleChange}
          required
        >
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

export const defaultIngredient = {
  [INGREDIENT_NAME]: '',
  [INGREDIENT_AMOUNT]: 0,
  [INGREDIENT_AMOUNT_UNIT]: '',
};

export default IngredientInputGroup;
