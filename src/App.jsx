import { Routes, Route } from 'react-router-dom';
import { Modal } from '@components/Modal';
import CreateTask from '@modals/CreateTask';
import { Main } from '@pages/Main/Main';
import './styles/@global.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { mainApi } from './utils/api/mainApi';
import { addAllBoards } from './store/slices/boardsSlice';
import { addAllTasks } from './store/slices/tasksSlice';
import { setActiveBoardId } from './store/slices/activeBoardId';

function App() {
  const [boards, setBoards] = useState([]);

  // ***Доски и Store***
  const dispatch = useDispatch();
  // Сохранение всех досок в Store
  const setAllBoards = boardsAll => dispatch(addAllBoards(boardsAll));
  // Извлекаем список досок из Store
  const boardsStore = useSelector(state => state.boards.boards);

  // ***Таски и Store***
  // Сохранение всех досок в Store
  const setAllTasks = tasksAll => dispatch(addAllTasks(tasksAll));
  // Извлекаем список досок из Store
  // const tasksStore = useSelector(state => state.tasks.tasks);

  // ***Активная доска и Store***
  // Сохранение активную доску в Store
  const setActiveBoard = id => dispatch(setActiveBoardId(id));

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
        setActiveBoard(firstBoard.id);
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
    setActiveBoard(boardId);
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
              handleClickProperBoard={handleClickProperBoard}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
