import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import sidebarReducer from "./sidebar-slice";
import adminSidebarReducer from "./admin-sidebar-slice";
const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    adminSidebar: adminSidebarReducer,
  },
});

export default store;
