import { Container } from 'react-bootstrap';
import RecipeForm from '../components/RecipeForm';

const Recipe = () => {
  return (
    <Container>
      <h1 className="text-center mt-4">Create a Recipe</h1>
      <RecipeForm />
    </Container>
  );
};

export default Recipe;
