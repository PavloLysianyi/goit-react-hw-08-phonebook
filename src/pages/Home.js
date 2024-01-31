import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Hello there</h1>
          <Link to="/contacts">Get Started</Link>
        </div>
      </div>
    </div>
  );
};
