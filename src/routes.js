import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Start from "./pages/start";

export default () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Start} />
      </Switch>
    </BrowserRouter>
  </div>
);
