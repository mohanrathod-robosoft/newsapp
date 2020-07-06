import React from "react";

import ROUTES from "./routes";

import { Route, Switch } from "react-router-dom";

const Routes = () => {
  let renderRoutes = ROUTES.map((item, key) => <Route key={key} {...item} />);

  return <Switch>{renderRoutes}</Switch>;
};

export default Routes;
