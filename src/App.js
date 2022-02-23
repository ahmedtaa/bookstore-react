import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Header from './components/Header';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Books />} />
        <Route path="/cat" exact element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
