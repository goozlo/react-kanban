import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.scss';

const Home: FC = () => {
  const str = 'this is home';

  return (
    <div>
      <h1>{str}</h1>
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
    </div>
  );
};

export default Home;
