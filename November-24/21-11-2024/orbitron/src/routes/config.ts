import Login from "../components/login";
import Register from "../components/register";
import AdminDashboard from "../pages/admin-dashboard";
import NotFound from "../pages/not-found";
import UserDashboard from "../pages/user-dashboard";

export const routesConfig = [
  { path: "/", Component: Login, isPrivate: false },
  { path: "/register", Component: Register, isPrivate: false },
  { path: "user/dashboard", Component: UserDashboard, isPrivate: true },
  { path: "/admin/dashboard", Component: AdminDashboard, isPrivate: true },
  { path: "*", Component: NotFound, isPrivate: false },
];
