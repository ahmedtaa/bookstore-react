import './books.css';

import React from 'react';
import { useSelector } from 'react-redux';

import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div className="books-container">
      {books.map((b) => (
        // eslint-disable-next-line react/jsx-key
        <Book
          key={b.item_id}
          id={b.item_id}
          title={b.title}
          name={b.category}
        />
      ))}
    </div>
  );
};
export default Books;
