import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import sidebarReducer from "./slices/sidebar";
const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
