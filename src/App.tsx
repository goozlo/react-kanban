import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import style from './styles/index.module.scss';

const App = () => (
  <div className={style.div}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  </div>
);

export default App;
