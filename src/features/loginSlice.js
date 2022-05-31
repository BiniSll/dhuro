import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: localStorage.getItem("token") ? true : false,
    user: null,
    token: null,
  },
  reducers: {
    isLoggedIn: (state) => {
      let token = localStorage.getItem("token");
      if (!!token) {
        state.isLoggedIn = true;
      }
    },
    login(state, action) {
      state.user = action.payload.resUser;
      state.token = action.payload.access_token;
      state.isLoggedIn = true;
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.access_token)
      );
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { isLoggedIn, login, logout } = loginSlice.actions;

export default loginSlice.reducer;
