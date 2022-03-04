import './booklist.css';

import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Books from './Books';
import Form from './Form';
import ErrorBoundary from '../utils/ErrorBoundary';
import { addBook } from '../redux/books/books';

const Booklist = () => {
  const title = useRef();
  const category = useRef();
  // const bookId = useRef();
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();

    dispatch(
      addBook({
        item_id: uuidv4(),
        title: title.current.value,
        category: category.current.value,
      }),
    );
    title.current.value = '';
    category.current.value = '';
  };

  return (
    <div className="booklist-container">
      <ErrorBoundary>
        <Books />
        <Form title={title} category={category} addBook={handleAddBook} />
      </ErrorBoundary>
    </div>
  );
};

export default Booklist;
