import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types";

const initialState: UserState = {
  role: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ role: "admin" | "user" }>) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = null;
    },
    register: (state, action: PayloadAction<{ role: "admin" | "user" }>) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
    },
  },
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
