import { createStore } from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileReducer";

// const Store = () => createStore(reducers, composeWithDevTools());
const Store = configureStore({
    reducer:reducers
  })

export default Store;
