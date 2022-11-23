import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';

const recipes = [
  { title: 'Brownies', description: 'Fudgy inside, cakey outside' },
  { title: 'Lasagna', description: 'Cheesy and saucy' },
  { title: 'Tteokbokki', description: 'Rice cakes with gochujang' },
  { title: 'Beyond Burger', description: 'Meatless burger' },
];

function App() {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    // Clear search input.
    setQuery('');
  };

  return (
    <div>
      <Header title="Recipedia" />
      <Search
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSearchSubmit}
      />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {recipes.map((recipe, i) => (
            <Col key={i} className="pb-3">
              <ImageCard {...recipe} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
