import React, { useState, useEffect } from 'react';
import './style.css';

function Book({ book }) {
  const [on, setOn] = useState(false);
  return (
    <li className={on ? 'on' : ''} onClick={() => setOn(!on)}>
      {book}
    </li>
  );
}

function BookList({ books }) {
  return (
    <ol>
      {books.map((book) => (
        <Book book={book} />
      ))}
    </ol>
  );
}

export default function App() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const loadBooks = async () => {
      const res = await fetch('http://localhost:3001/books');
      const data = await res.json();
      setBooks(data);
    };

    loadBooks();
  }, []);

  return (
    <div className="App">
      <h1>Book List</h1>
      <input
        placeholder="Filter books"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <BookList
        books={
          filter ? books.filter((b) => b.includes(filter)) : books
        }
      />
    </div>
  );
}
