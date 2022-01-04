import React from "react";
import { Route, Redirect } from "react-router-dom";

const NonAuthmiddleware = ({ component: Component, layout: Layout }) => (
  <Route
    render={props => {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);


const AuthMiddleware = ({ component: Component, layout: Layout, path }) => {

  if (!localStorage.getItem("authUser")) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      path={path}
      render={props => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export { NonAuthmiddleware, AuthMiddleware };
