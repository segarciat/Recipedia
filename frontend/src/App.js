import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header title="Recipedia" />
      <Container>
        <Outlet />
      </Container>
    </React.Fragment>
  );
}

export default App;
