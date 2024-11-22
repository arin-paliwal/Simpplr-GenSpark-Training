import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { UserState } from "../../types";

const setCookie = (key: string, value: string) => {
  Cookies.set(key, value, { expires: 7 });
};

const removeCookie = (key: string) => {
  Cookies.remove(key);
};

const initialState: UserState = {
  role:
    Cookies.get("role") === "admin" || Cookies.get("role") === "user"
      ? (Cookies.get("role") as "admin" | "user")
      : null,
  isAuthenticated: Cookies.get("isAuthenticated") === "true",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ role: "admin" | "user" }>) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      setCookie("isAuthenticated", "true");
      setCookie("role", action.payload.role);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = null;
      removeCookie("isAuthenticated");
      removeCookie("role");
    },
    register: (state, action: PayloadAction<{ role: "admin" | "user" }>) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      setCookie("isAuthenticated", "true");
      setCookie("role", action.payload.role);
    },
  },
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
