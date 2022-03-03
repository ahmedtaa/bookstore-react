import './booklist.css';

import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Books from './Books';
import Form from './Form';
import ErrorBoundary from '../utils/ErrorBoundary';
import { addBook } from '../redux/books/books';

const Booklist = () => {
  const bTitle = useRef();
  const bAuther = useRef();
  // const bookId = useRef();
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();

    dispatch(
      addBook({
        id: uuidv4(),
        bookTitle: bTitle.current.value,
        autherName: bAuther.current.value,
      })
    );
    bTitle.current.value = '';
    bAuther.current.value = '';
  };

  return (
    <div className="booklist-container">
      <ErrorBoundary>
        <Books />
        <Form title={bTitle} auther={bAuther} addBook={handleAddBook} />
      </ErrorBoundary>
    </div>
  );
};

export default Booklist;
