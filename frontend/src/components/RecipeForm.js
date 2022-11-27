import { useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import ModalInputWrap from './ModalInputWrap';
import IngredientInputGroup, {
  defaultIngredient,
} from './IngredientInputGroup';

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const [current, setCurrent] = useState({ ...defaultIngredient });

  const handleIngredientSave = (e) => {
    // Add new ingredient.
    setIngredients((oldIngredients) => [...oldIngredients, current]);
    // Reset new ingredient
    setCurrent({ ...defaultIngredient });
  };

  const handleIngredientCancel = (e) => {
    // Reset new ingredient.
    setCurrent({ ...defaultIngredient });
  };

  const handleInputChange = (e) => {
    setCurrent((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <Container className="border border-3">
      <Row className="justify-content-center">
        <h3 className="text-center my-4">Basic Details</h3>
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
            <h3 className="my-4 text-center">Ingredients</h3>
            <Col className="d-flex justify-content-center my-3">
              <ModalInputWrap
                title={'New Ingredient'}
                onCancel={handleIngredientCancel}
                onSave={handleIngredientSave}
              >
                <IngredientInputGroup
                  fields={current}
                  handleChange={handleInputChange}
                />
              </ModalInputWrap>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeForm;
