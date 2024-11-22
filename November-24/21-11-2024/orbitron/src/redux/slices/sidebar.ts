import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  selectedItem: string | null;
  context: "admin" | "user";
}

const initialState: SidebarState = {
  selectedItem: "dashboard",
  context: "user",
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
    setContext: (state, action: PayloadAction<"admin" | "user">) => {
      state.context = action.payload;
    },
  },
});

export const { setSelectedItem, clearSelectedItem, setContext } = sidebarSlice.actions;
export default sidebarSlice.reducer;
