import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing';
import MapView from './pages/MapView';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" exact component={MapView} />
      </Switch>
    </BrowserRouter>
  );
}