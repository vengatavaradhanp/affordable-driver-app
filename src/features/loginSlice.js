import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { loginSuccess } =
  loginSlice.actions;
export default loginSlice.reducer;
