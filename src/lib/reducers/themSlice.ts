import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  theme: string;
}

const initialState: CounterState = {
  theme: "dark",
};
export const themeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    togleTheme: (state) => {
      state.theme = "light";
    },
  },
});

export const { togleTheme } = themeSlice.actions;
export default themeSlice.reducer;
