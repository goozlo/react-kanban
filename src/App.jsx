import { Routes, Route } from 'react-router-dom';
import { Modal } from '@components/Modal';
import CreateTask from '@modals/CreateTask';
import { Main } from '@pages/Main/Main';
import './styles/@global.scss';
import { useSelector, useDispatch } from 'react-redux';

import { useState, useEffect } from 'react';
import { mainApi } from './utils/api/mainApi.js';
import { addAllBoards } from './store/slices/boardsSlice';
import { addAllTasks } from './store/slices/tasksSlice';

function App() {
  const [boards, setBoards] = useState([]);
  const [activeBoardId, setActiveBoardId] = useState();

  // ***Доски и Store***
  const dispatch = useDispatch();
  // Сохранение всех досок в Store
  const setAllBoards = boardsAll => dispatch(addAllBoards(boardsAll));
  // Извлекаем список досок из Store
  // const boardsStore = useSelector(state => state.boards.boards);

  // ***Таски и Store***
  // Сохранение всех досок в Store
  const setAllTasks = tasksAll => dispatch(addAllTasks(tasksAll));
  // Извлекаем список досок из Store
  // const tasksStore = useSelector(state => state.tasks.tasks);

  // Запрашиваем все доски из api
  function getBoards() {
    mainApi
      .getBoards()
      .then(boards => {
        setBoards(boards);
        // Сохранение досок в Store (функция описана в "Доски и Store")
        setAllBoards(boards);
        // Берем первую доску из списка досок и устанавливаем ее id качестве активной доски
        // чтобы после загрузке досок отображались задачи первой доски
        const firstBoard = boards[0];
        setActiveBoardId(firstBoard.id);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const getTasks = () => {
    mainApi
      .getTasks()
      .then(tasks => {
        setAllTasks(tasks);
      })
      .catch(err => console.log(err));
  };

  // Функция обрабатывает клик по названию конкретной доски и устанавливает id в стейт
  const handleClickProperBoard = boardId => {
    setActiveBoardId(boardId);
  };

  // При загрузке страницы запрашиваем все доски и таски
  useEffect(() => {
    getBoards();
    getTasks();
  }, []);

  return (
    <>
      <Modal />
      <Routes>
        <Route
          path='/'
          element={
            <Main
              boards={boards}
              activeBoardId={activeBoardId}
              handleClickProperBoard={handleClickProperBoard}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
