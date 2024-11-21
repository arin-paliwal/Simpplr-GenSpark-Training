import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import sidebarReducer from "./sidebar-slice";
const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
