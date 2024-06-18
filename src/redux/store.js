import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Books/reducer";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
