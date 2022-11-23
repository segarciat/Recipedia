import { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Search from '../components/Search';
import ImageCard from '../components/ImageCard';

const recipes = [
  { title: 'Brownies', description: 'Fudgy inside, cakey outside' },
  { title: 'Lasagna', description: 'Cheesy and saucy' },
  { title: 'Tteokbokki', description: 'Rice cakes with gochujang' },
  { title: 'Beyond Burger', description: 'Meatless burger' },
];
const Gallery = () => {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    // Clear search input.
    setQuery('');
  };
  return (
    <Container>
      <h1 className="mt-4">Recipe Gallery</h1>
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
    </Container>
  );
};

export default Gallery;
