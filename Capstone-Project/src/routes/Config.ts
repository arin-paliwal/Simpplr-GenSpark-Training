import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import { RouteConfigInterface } from "../types/routes";

export const routesConfig: RouteConfigInterface[] = [
  { path: "/", Component: LandingPage, isPrivate: false },
  { path: "/login", Component: LoginPage, isPrivate: false },
  { path: "/register", Component: SignupPage, isPrivate: false },
];
