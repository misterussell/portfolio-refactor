import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Portfolio, NotFound } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
