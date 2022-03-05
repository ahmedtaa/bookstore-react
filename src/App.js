import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from './components/Categories';
import Header from './components/Header';
import BookList from './components/BookList';
import ErrorBoundary from './utils/ErrorBoundary';
import { fetchData } from './redux/books/books';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" exact element={<BookList />} />

          <Route path="/categories" exact element={<Categories />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;
