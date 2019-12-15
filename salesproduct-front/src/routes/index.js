import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Products from "../pages/Products";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Product from "../pages/Product";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products" component={Product} />
        <Route exact path="/index" component={Products} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}
