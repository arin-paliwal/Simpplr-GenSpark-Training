import { ReactNode } from "react";

export interface PrivateRouteProps {
  children: ReactNode;
}

export interface UserState {
  role: "admin" | "user" | null;
  isAuthenticated: boolean;
}

export interface LoginFormInterface {
  name?: string;
  email: string;
  password: string;
  role?: 1 | 2;
}
