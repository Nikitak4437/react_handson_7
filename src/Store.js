import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Slice";
const Store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default Store;
