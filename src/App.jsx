import { Routes, Route } from 'react-router-dom';
import { Modal } from '@components/Modal';
import CreateTask from '@modals/CreateTask';
import { Main } from '@pages/Main/Main';
import './styles/@global.scss';

import { useState, useEffect } from 'react';
import { BoardApi } from "./utils/api/boardsApi.js";

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
      <CreateTask />
    </>
  );
}

export default App;
