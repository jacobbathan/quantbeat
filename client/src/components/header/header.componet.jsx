import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={logo} className="logo" alt="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/login">
        LOGIN // SIGN-UP
      </Link>
      <Link className="option" to="/company">
        COMPANY
      </Link>
      <Link className="option" to="/news">
        NEWS
      </Link>
      <Link className="option" to="/ipo">
        UPCOMING IPO
      </Link>
    </div>
  </div>
);

export default Header;
