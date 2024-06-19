import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  isFavorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload };
    },
    setAuthorFilter: (state, action) => {
      return { ...state, author: action.payload };
    },
    setFavoriteFilter: (state) => {
      return { ...state, isFavorite: !state.isFavorite };
    },
    resetFilter: (state) => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  resetFilter,
  setFavoriteFilter,
  setAuthorFilter,
} = filterSlice.actions;
export const selectFilterTitle = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectFavoriteFilter = (state) => state.filter.isFavorite;

export default filterSlice.reducer;
