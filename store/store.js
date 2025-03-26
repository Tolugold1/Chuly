// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice.js"

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer
  },
});

export default store;
