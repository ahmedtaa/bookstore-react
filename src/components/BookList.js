import './booklist.css';

import Books from './Books';
import Form from './Form';
import ErrorBoundary from '../utils/ErrorBoundary';

const Booklist = () => (
  <div className="booklist-container">
    <ErrorBoundary>
      <Books />
      <Form />
    </ErrorBoundary>
  </div>
);

export default Booklist;
