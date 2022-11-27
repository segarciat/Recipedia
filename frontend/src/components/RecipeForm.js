import { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import ModalFormWrap from './ModalFormWrap';
import IngredientInputGroup, {
  defaultIngredient,
} from './IngredientInputGroup';

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const [showIngredientModal, setShowIngredientModal] = useState(false);
  const [current, setCurrent] = useState({ ...defaultIngredient });

  const handleIngredientSave = (e) => {
    e.preventDefault();
    // Add new ingredient.
    setIngredients((oldIngredients) => [...oldIngredients, { ...current }]);
    // Reset new ingredient
    setCurrent({ ...defaultIngredient });
    setShowIngredientModal(false);
  };

  const handleIngredientCancel = (e) => {
    // Reset new ingredient.
    setCurrent({ ...defaultIngredient });
    setShowIngredientModal(false);
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
              <Button
                variant="primary"
                onClick={(e) => setShowIngredientModal(true)}
              >
                Add Ingredient
              </Button>
            </Col>
            {ingredients.map((ingredient, index) => (
              <IngredientInputGroup
                key={index}
                fields={ingredient}
                isReadOnly
              />
            ))}
          </Form>
          <ModalFormWrap
            title={'New Ingredient'}
            show={showIngredientModal}
            onCancel={handleIngredientCancel}
            onSubmit={handleIngredientSave}
          >
            <IngredientInputGroup
              fields={current}
              handleChange={handleInputChange}
            />
          </ModalFormWrap>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeForm;
