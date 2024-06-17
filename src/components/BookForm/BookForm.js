import { useState } from "react";
import "./BookForm.scss";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      console.log("title", title, author);
    }
    setTitle("");
    setAuthor("");
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
        </form>
      </div>
    </div>
  );
};

export default BookForm;
