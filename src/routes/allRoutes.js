import React from "react";

// User Routes
const HomePage = React.lazy(() => import("../pages/Home"));

// Authentication Routes
const Login = React.lazy(() => import("../pages/Login"));

const userRoutes = [
  { path: "/", component: HomePage},
];

const authRoutes = [
  { path: "/login", component: Login },
];

export { userRoutes, authRoutes };
