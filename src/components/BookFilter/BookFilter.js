import "./BookFilter.scss";
import {
  setTitleFilter,
  setAuthorFilter,
  selectFilterTitle,
  selectAuthorFilter,
  resetFilter,
} from "../../redux/slice/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const BookFilter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectFilterTitle);
  const authorFilter = useSelector(selectAuthorFilter);

  const handleTitleWriteChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleAuthorWriteChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const resetFilterInput = () => {
    dispatch(resetFilter());
  };
  return (
    <div className="BookFilter">
      <div className="BookFilter__filter-wrapper">
        <div className="BookFilter__filter">
          <input
            type="text"
            placeholder="search books"
            onChange={handleTitleWriteChange}
            value={titleFilter}
          />
          <div className="BookFilter__filter">
            <input
              type="text"
              placeholder="search author"
              onChange={handleAuthorWriteChange}
              value={authorFilter}
            />
          </div>
          <div className="BookFilter__reset" onClick={resetFilterInput}>
            RESET FILTER
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookFilter;
