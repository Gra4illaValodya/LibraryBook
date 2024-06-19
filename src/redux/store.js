import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Books/reducer";
import filterSlice from "./slice/filterSlice";
const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterSlice,
  },
});

export default store;
