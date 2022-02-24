import './booklist.css';
import React, { useState, useEffect } from 'react';
import Book from './Book';
import Form from './Form';

const Booklist = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const bb = [
      { id: 1, bookTitle: 'helloWorld', autherName: 'ahmed' },
      { id: 2, bookTitle: 'helloWorld2', autherName: 'ahmed2' },
      { id: 3, bookTitle: 'helloWorld3', autherName: 'ahmed3' },
    ];

    setBooks(bb);
  }, []);

  return (
    <div className="books-container">
      {books.map((b) => (
        <Book key={b.id} title={b.bookTitle} name={b.autherName} />
      ))}
      <Form />
    </div>
  );
};

export default Booklist;
