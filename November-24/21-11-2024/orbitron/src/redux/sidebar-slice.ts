import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  selectedItem: string | null;
}

const initialState: SidebarState = {
  selectedItem: "Today",
};

const sidebarSlice = createSlice({
  name: "sidebar",
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

export const { setSelectedItem, clearSelectedItem } = sidebarSlice.actions;
export default sidebarSlice.reducer;
