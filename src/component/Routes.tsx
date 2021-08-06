import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import NotFound from './Roles/NotFound';

const Routes = (props: any) => (
  <Router {...props}>
    <Switch>
      <Route exact path="/">
        <Redirect to="/coronaTracker" />
      </Route>
      <Route exact path="/coronaTracker">
        <Dashboard />
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);
export default Routes;
