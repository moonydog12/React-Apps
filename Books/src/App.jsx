import {  useEffect, useContext } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
import BooksContext from './context/books';

const App = () => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
