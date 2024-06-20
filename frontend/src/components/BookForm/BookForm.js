import {
  addBook,
  deleteBook,
  toggleFavorite,
} from "../../redux/slice/BooksSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createBookWithId } from "../../untils/createBookWithId";

import booksData from "../../data/books.json";
import axios from "axios";

import "./BookForm.scss";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const addRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    console.log(randomIndex, randomBook);
    dispatch(addBook(createBookWithId(randomBook, "RANDOM")));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = createBookWithId({ title, author }, "MANUAL");
      console.log(addBook(book));
      dispatch(addBook(book));
    }
    setTitle("");
    setAuthor("");
  };

  const addRandomBookFromApi = async () => {
    try {
      const res = await axios.get("http://localhost:4000/random-book");
      if (res?.data?.title && res?.data?.author) {
        dispatch(addBook(createBookWithId(res.data, "API")));

        console.log("res", res.data);
      }
    } catch (error) {
      console.log("ERROR WITH CONNECT", error);
    }
  };
  return (
    <div className="BookForm">
      <div className="BookForm__title">Add New Book</div>
      <div className="BookForm__form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="BookForm__input">
            <label htmlFor="title">Title: </label>
            <input
              name="title"
              id="title"
              placeholder="enter title book..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="BookForm__input">
            <label htmlFor="author">Author: </label>
            <input
              name="author"
              id="author"
              placeholder="enter author book..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button className="BookForm__submit" type="submit">
            SUBMIT
          </button>
          <button
            className="BookForm__submit"
            type="button"
            onClick={addRandomBook}
          >
            ADD RANDOM
          </button>
          <button
            className="BookForm__submit"
            type="button"
            onClick={addRandomBookFromApi}
          >
            ADD RANDOM FROM API
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
