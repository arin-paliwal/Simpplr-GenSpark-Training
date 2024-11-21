import { useSelector } from "react-redux";
import { PrivateRouteProps } from "../types";
import { useLocation } from "react-router-dom";

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const location = useLocation();
  const path = location.pathname;
  const _role = path.split("/")[1];
  const { role, isAuthenticated } = useSelector((state: any) => state.user);
  if (isAuthenticated && role === _role) {
    return children;
  }
  window.location.href = "/";
}
