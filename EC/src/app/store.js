// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"; 

export const store = configureStore({
  reducer: {
    auth: authReducer, // you can add more slices here later
  },
});

