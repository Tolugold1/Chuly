// store/slices/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        status: false,
    },
    reducers: {
        show: (state) => {
            state.status = true
        },
        hide: (state) => {
            state.status = false;
        },
    }
});

export const { show, hide } = sidebarSlice.actions

export default sidebarSlice.reducer;
