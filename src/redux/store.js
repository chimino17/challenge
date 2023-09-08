import { configureStore } from "@reduxjs/toolkit";
import banksReducer from "./bankSlice";

export const store = configureStore({
  reducer: {
    banks: banksReducer,
  },
});
