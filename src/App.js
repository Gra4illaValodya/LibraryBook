import "./App.scss";
import BookFilter from "./components/BookFilter/BookFilter";

import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";

function App() {
  return (
    <div className="app">
      <div className="app__component">
        <BookForm />
      </div>
      <div className="app__wrapper">
        <div className="app__component">
          <BookFilter />
        </div>
        <div className="app__component">
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default App;
