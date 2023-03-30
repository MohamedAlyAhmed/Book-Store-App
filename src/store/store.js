import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./Book-slice";

const store = configureStore({
  reducer: {books:BookSlice}
});

export default store;
