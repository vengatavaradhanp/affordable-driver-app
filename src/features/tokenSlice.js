import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    token: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const { token } =
  tokenSlice.actions;
export default tokenSlice.reducer;
