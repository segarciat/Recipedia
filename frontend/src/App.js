import React from 'react';

import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header title="Recipedia" />
      <Outlet />
    </React.Fragment>
  );
}

export default App;
