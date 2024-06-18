import * as a from "./actionType";

const initialState = [];

const booksReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];
    case a.DELETE_BOOK:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
