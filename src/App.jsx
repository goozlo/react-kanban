import { Routes, Route } from 'react-router-dom';
import { Modal } from '@components/Modal';
import { Main } from '@pages/Main/Main';
import './styles/@global.scss';

import { useState, useEffect } from 'react';
import { BoardApi } from "./util/api/boardsApi.js";

function App() {

  const [boards, setBoards] = useState([])

  useEffect(() => {
    getBoards()
    console.log('test')
  }, []);

  function getBoards() {
    BoardApi.getBoards()
      .then((boards) => {
        setBoards(boards)
      })
      .catch((err) => {
        console.log(err);
      })

  }

  return (
    <>
      <Modal />
      <Routes>
        <Route path='/' element={<Main boards={boards} />} />
      </Routes>
    </>
  );
}

export default App;
