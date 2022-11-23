import { useState } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  // Pass down this function to BookEdit component
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  // Pass down this function to BookShow component
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);

    // Update books state
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    // Bad Practice
    // books.push({ id: 123, title: title });

    const updatedBooks = [...books, { id: Math.round(Math.random() * 9999), title }];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
