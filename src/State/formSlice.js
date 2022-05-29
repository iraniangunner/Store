import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    url: "",
    title: "",
    description: "",
    price: "",
  },
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDesc: (state, action) => {
      state.description = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setUrl, setTitle, setDesc, setPrice } = formSlice.actions;

export const url = (state) => state.form.url;
export const title = (state) => state.form.title;
export const description = (state) => state.form.description;
export const price = (state) => state.form.price;

export default formSlice.reducer;
