import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="font-bold">Hello</h1>
          <Link to="/contacts" className="btn btn-primary">
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};
