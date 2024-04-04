import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/themSlice";
import userSlice from "./reducers/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeSlice,
      user: userSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
