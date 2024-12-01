import Login from "../components/Login";
import Register from "../components/Register";
import { RouteConfigInterface } from "../types/routes";

export const routesConfig:RouteConfigInterface[] = [
  { path: "/login", Component: Login, isPrivate: false },
  { path: "/register", Component: Register, isPrivate: false },
];
