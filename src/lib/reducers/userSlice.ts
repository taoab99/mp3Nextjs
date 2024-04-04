"use client";

import { UserInfo } from "@/src/types/userType";
import { createSlice } from "@reduxjs/toolkit";

type initialSice = {
  user: UserInfo | null;
};
const initialState: initialSice = {
  //   user: initialUser ? JSON.parse(initialUser) : null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
