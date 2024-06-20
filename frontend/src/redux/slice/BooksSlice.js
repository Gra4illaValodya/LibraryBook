import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    },
  },
});

console.log(booksSlice.actions);
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export default booksSlice.reducer;

// const booksReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case a.ADD_BOOK:
//         return [...state, action.payload];
//       case a.DELETE_BOOK:
//         return state.filter((el) => el.id !== action.payload);
//       case a.TOGGLE_FAVORITE:
//         return state.map((book) =>
//           book.id === action.payload
//             ? { ...book, isFavorite: !book.isFavorite }
//             : book
//         );
//       default:
//         return state;
//     }
//   };
//   setTitleFilter: (state, action) => {
//     return { ...state, title: action.payload };
//   },
//   setAuthorFilter: (state, action) => {
//     return { ...state, author: action.payload };
//   },
//   setFavoriteFilter: (state) => {
//     return { ...state, isFavorite: !state.isFavorite };
//   },
//   resetFilter: (state) => {
//     return initialState;
//   },
