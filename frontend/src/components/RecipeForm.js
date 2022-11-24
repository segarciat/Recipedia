import { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import IngredientInput from './IngredientInput';

const defaultIngredient = {
  ingredient: '',
  amount: 0,
  unit: '',
};

const RecipeForm = () => {
  // Ingredient has a name, an amount, and a unit for the amount
  const [ingredients, setIngredients] = useState([]);

  const handleAdd = () => {
    setIngredients((oldIngredients) => [
      ...oldIngredients,
      { ...defaultIngredient },
    ]);
  };

  const handleIngredientDelete = (index, evt) => {
    setIngredients((oldIngredients) =>
      oldIngredients.filter((ingredient, i) => index !== i)
    );
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
            {ingredients.map((ingredient, i) => (
              <IngredientInput
                key={i}
                handleDelete={handleIngredientDelete.bind(this, i)}
              />
            ))}
            <Col className="d-flex justify-content-center my-3">
              <Button variant="success" onClick={handleAdd}>
                Add Ingredient
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeForm;
