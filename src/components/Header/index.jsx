import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <hr />
    </>
  );
};

export { Header };
