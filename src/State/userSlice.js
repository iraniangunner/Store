import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "profile",
  initialState: {
    email : "",
    username : "",
    password : "",
    confirmPass: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirm: (state, action) => {
      state.confirmPass = action.payload;
    },
  },
});

export const { setEmail, setUsername, setPassword, setConfirm } = userSlice.actions;

export const email = (state) => state.profile.email;
export const userName = (state) => state.profile.username;
export const passWord = (state) => state.profile.password;
export const passConfirm = (state) => state.profile.confirmPass;

export default userSlice.reducer;