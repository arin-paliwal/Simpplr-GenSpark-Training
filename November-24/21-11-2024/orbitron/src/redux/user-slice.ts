import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { UserState } from "../types";

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
      Cookies.set("isAuthenticated", "true", { expires: 7 });
      Cookies.set("role", action.payload.role, { expires: 7 });
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = null;
      Cookies.remove("isAuthenticated");
      Cookies.remove("role");
    },
    register: (state, action: PayloadAction<{ role: "admin" | "user" }>) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      Cookies.set("isAuthenticated", "true", { expires: 7 });
      Cookies.set("role", action.payload.role, { expires: 7 });
    },
  },
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
