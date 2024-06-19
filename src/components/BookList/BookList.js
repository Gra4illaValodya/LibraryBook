import "./BookList.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/Books/actionCreator";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import {
  selectFilterTitle,
  selectAuthorFilter,
} from "../../redux/slice/filterSlice";
import { useState } from "react";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const filterTitle = useSelector(selectFilterTitle);
  const filterAuthor = useSelector(selectAuthorFilter);

  console.log(filterTitle);
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
    return matchesAuthor && matchesTitle;
  });

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
                  <div className="BookList__title">{book.title}</div>
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
                author: <span>{book.author}</span>{" "}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BookList;
