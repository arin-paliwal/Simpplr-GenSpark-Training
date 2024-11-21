import { PrivateRouteProps } from "../types";

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  }
  window.location.href = "/";
}
