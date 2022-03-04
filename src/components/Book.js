/* eslint-disable react/prop-types */
import './book.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, name, id } = props;
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hU7hRqGMmMkUTHelAE4I/books/${id}`,
      {
        method: 'DELETE',
      },
    );
    dispatch(removeBook(id));
  };
  return (
    <div className="book-container" key={id}>
      <p>
        {title}
        <span> by </span>
        {name}
      </p>
      <button type="button" onClick={handleRemoveBook}>
        remove
      </button>
    </div>
  );
};

export default Book;
