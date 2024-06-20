import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Books/reducer";
import filterSlice from "./slice/filterSlice";
import BooksSlice from "./slice/BooksSlice";
const store = configureStore({
  reducer: {
    books: BooksSlice,
    filter: filterSlice,
  },
});

export default store;
