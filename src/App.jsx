import { Routes, Route } from 'react-router-dom';
import { Modal } from '@components/Modal';
import CreateTask from '@modals/CreateTask';
import { Main } from '@pages/Main/Main';
import './styles/@global.scss';

import { useState, useEffect } from 'react';
import { mainApi } from './utils/api/mainApi.js';

function App() {
  const [boards, setBoards] = useState([]);
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getBoards();
    console.log('test');
  }, []);

  function getBoards() {
    mainApi
      .getBoards()
      .then(boards => {
        setBoards(boards);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Функция обрабатывает клик по названию конкретной доски, внутри себя: запрашивает список колонок с апи для этой доски
  const handleClickProperBoard = boardId => {
    mainApi
      .getColumns()
      .then(columns => {
        // В ответ от апи мы получаем список всех колонок. Поэтому нужно отфильтровать колонки только для конкретной доски.
        // Когда появится бэк запрос к апи будет делаться по id доски и в ответе мы будем получать массив колонок для конкретной доски - это можно будет удалить.
        const properColumns = columns.filter(el => el.boardId === boardId);
        // Устанавливает отфильтрованный массив колнок в стейт переменной columns
        setColumns(properColumns);
      })
      .catch(err => console.log(err));

    mainApi.getTasks()
    .then(tasks => {
      const properTasks = tasks.filter(task => task.boardId === boardId);
      setTasks(properTasks);
    })
    .catch(err => console.log(err));  
  };

  return (
    <>
      <Modal />
      <Routes>
        <Route
          path='/'
          element={<Main 
            boards={boards} 
            columns={columns} 
            handleClickProperBoard={handleClickProperBoard} 
            tasks={tasks}
          />}
        />
      </Routes>
    </>
  );
}

export default App;
