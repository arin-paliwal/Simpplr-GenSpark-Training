import { ReactNode } from "react";
import store from "../redux/store";

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

export interface UserInterface {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

export type RootState = ReturnType<typeof store.getState>;

