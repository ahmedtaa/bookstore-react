import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../profileIcon.png';

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
    <img className="profileicon" alt="profile" src={profileIcon} />
  </nav>
);

export default Header;
