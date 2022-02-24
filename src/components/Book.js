/* eslint-disable react/prop-types */
import './book.css';

import React from 'react';

const Book = (props) => {
  const { title, name } = props;
  return (
    <div className="book-container">
      <p>
        {title}
        <span> by </span>
        {name}
      </p>
      <button type="button">button</button>
    </div>
  );
};

export default Book;
