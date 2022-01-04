import React from "react";

// User Routes
const HomePage = React.lazy(() => import("../pages/Home"));
const History = React.lazy(() => import("../pages/History"));

// Authentication Routes
const Login = React.lazy(() => import("../pages/Login"));

const userRoutes = [
  { path: "/", component: HomePage},
  { path: "/history", component: History},
];

const authRoutes = [
  { path: "/login", component: Login },
];

export { userRoutes, authRoutes };
