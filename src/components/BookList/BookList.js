import "./BookList.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/Books/actionCreator";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import {
  selectFilterTitle,
  selectAuthorFilter,
  selectFavoriteFilter,
} from "../../redux/slice/filterSlice";
import { useState } from "react";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const filterTitle = useSelector(selectFilterTitle);
  const filterAuthor = useSelector(selectAuthorFilter);
  const filterFavorite = useSelector(selectFavoriteFilter);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleFavorite = (id, event) => {
    event.stopPropagation();

    dispatch(toggleFavorite(id));
  };

  const filteredList = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(filterAuthor.toLowerCase());
    const matchesFavorite = filterFavorite ? book.isFavorite : true;
    return matchesAuthor && matchesTitle && matchesFavorite;
  });

  const highlineMatch = (text, filter) => {
    if (!filter) {
      return text;
    }

    const regex = new RegExp(`(${filter})`, `gi`);
    const parts = text.split(regex);
    console.log(parts);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="BookList__highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="BookList">
      <div className="BookList__title"> Book List</div>
      <ul className="BookList__list">
        {books.length === 0 ? (
          <p className="BookList__no-books">No Books In List</p>
        ) : (
          filteredList.map((book, idx) => (
            <li key={book.id} className="BookList__item">
              <div className="BookList__item-wrapper">
                <div className="BookList__text-wrapper">
                  <div className="BookList__index">{idx + 1 + "."}</div>
                  <div className="BookList__title">
                    {highlineMatch(book.title, filterTitle)}
                  </div>
                </div>

                <div className="BookList__btn-wrapper">
                  <div className="BookList__icon">
                    {!book.isFavorite ? (
                      <BsBookmarkStar
                        className="BookList__favorite BookList__favorite-inactive"
                        onClick={(event) => handleFavorite(book.id, event)}
                      />
                    ) : (
                      <BsBookmarkStarFill
                        className="BookList__favorite BookList__favorite-active"
                        onClick={(event) => handleFavorite(book.id, event)}
                      />
                    )}
                  </div>
                  <div
                    className="BookList__delete"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </div>
                </div>
              </div>
              <div className="BookList__author">
                author: <span>{highlineMatch(book.author, filterAuthor)}</span>{" "}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BookList;
