import "./BookFilter.scss";
import {
  setTitleFilter,
  setCount,
  selectFilterTitle,
  resetFilter,
} from "../../redux/slice/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const BookFilter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectFilterTitle);

  const handleTitleWriteChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const resetFilterInput = () => {
    dispatch(resetFilter());
  };
  return (
    <div className="BookFilter">
      <div className="BookFilter__filter">
        <input
          type="text"
          placeholder="search books"
          onChange={handleTitleWriteChange}
          value={titleFilter}
        />
        <div className="BookFilter__reset" onClick={resetFilterInput}>
          RESET FILTER
        </div>
      </div>
    </div>
  );
};
export default BookFilter;
