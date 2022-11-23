import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const Header = ({ title }) => {
  return (
    <Navbar bg="dark" variant="dark">
      {/* Note that scroll bar affects margin of container, so logo may shift */}
      <Container>
        <Navbar.Brand as={Link} to="/">
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
