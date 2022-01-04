import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { authRoutes, userRoutes } from "./routes/allRoutes";
import { NonAuthmiddleware, AuthMiddleware } from "./routes/middleware";
import Layout from "./components/Layout";
import NonAuthLayout from "./components/Layout/NonAuthLayout";

// import "./assets/scss/theme.scss";
const PageNotFound = React.lazy(() => import("./components/PageNotFound404"));


const App = () => {

  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={null}>
          <Switch>
            {authRoutes.map((route, idx) => (
              <NonAuthmiddleware
                key={idx}
                path={route.path}
                layout={NonAuthLayout}
                component={route.component}
              />
            ))}

            {userRoutes.map((route, idx) => (
              <AuthMiddleware
                key={idx}
                path={route.path}
                exact
                layout={Layout}
                component={route.component}
                roles={route.roles}
              />
            ))}
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default App;
