import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminSidebarState {
  selectedItem: string | null;
}

const initialState: AdminSidebarState = {
  selectedItem: "dashboard",
};

const AdminSidebarSlice = createSlice({
  name: "admin-sidebar",
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<string>) => {
      state.selectedItem = action.payload;
    },
    clearSelectedItem: (state) => {
      state.selectedItem = null;
    },
  },
});

export const { setSelectedItem, clearSelectedItem } = AdminSidebarSlice.actions;
export default AdminSidebarSlice.reducer;
