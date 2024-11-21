import Login from "../components/login";
import Register from "../components/register";

export const routesConfig = [
  { path: "/", Component: Login, isPrivate: false },
  { path: "/register", Component: Register, isPrivate: false },
];