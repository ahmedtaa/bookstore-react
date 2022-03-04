import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <a href="/">
      <h2>Bookstore CMS</h2>
    </a>
    <ul className="links">
      <li>
        <Link className="link" to="/">
          BOOKS
        </Link>
      </li>
      <li>
        <Link className="link" to="/categories">
          CATEGORIES
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
