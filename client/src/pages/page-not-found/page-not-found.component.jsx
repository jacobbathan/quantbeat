import React from 'react';
import lilly from '../../assets/lilly404.jpg';
import './page-not-found.styles.scss';

const PageNotFound = () => {
  return (
    <div className="content">
      <img className="img" src={lilly} alt="lilly" />
      <div className="message">
        <p className="notfound">404 // PAGE NOT FOUND</p>
        <p className="uhoh">
          Uh oh, Lilly sees that you stumbled on a page that doesn't exist.
          Please go back, or click the icon on the top left to return home.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
