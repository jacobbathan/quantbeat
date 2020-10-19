import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    Hello user! Welcome Back.
    <Link to="/">
      <div>
        <ul>Home</ul>
      </div>
    </Link>
    <Link to="/company">
      <div>
        <ul>Company View</ul>
      </div>
    </Link>
  </div>
);

export default Header;
