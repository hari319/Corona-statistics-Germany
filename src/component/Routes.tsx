import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "../App";
import NotFound from "./Roles/NotFound";

const Routes = (props: any) => (
  <Router {...props}>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);
export default Routes;
