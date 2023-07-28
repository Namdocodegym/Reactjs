import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const account = location?.state?.account;

  return (
    <div>
      <h2>Welcome Home</h2>
      <p>Logged in as: {account}</p>
    </div>
  );
};

export default Home;
