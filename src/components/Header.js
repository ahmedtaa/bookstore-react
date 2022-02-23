import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="logo">
      <h1>Book Store</h1>
    </div>
    <div className="nav">
      <Link to="/" className="link">
        Books
      </Link>
      <Link to="/cat" className="link">
        Categories
      </Link>
    </div>
  </div>
);

export default Header;
