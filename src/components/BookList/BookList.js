import "./BookList.scss";
import { useSelector } from "react-redux";
const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="BookList">
      <div className="BookList__title"> Book List</div>
      <ul className="BookList__list">
        {books.length === 0 ? (
          <p className="BookList__no-books">No Books In List</p>
        ) : (
          books.map((book, idx) => (
            <li key={idx} className="BookList__item">
              <div className="BookList__item-wrapper">
                {/* <div className="BookList__index">{idx + 1 + ")"}</div> */}
                <div className="BookList__title">{book.title}</div>
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
