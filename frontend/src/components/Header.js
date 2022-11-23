import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = ({ title }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Recipedia logo"
            src="logo.png"
            className="d-inline-block align-top"
          />{' '}
          {title}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
