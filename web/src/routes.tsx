import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from './pages/Landing';
import CreatePoint from './pages/CreatePoint';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route component={Landing} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
    </BrowserRouter>
  );
}