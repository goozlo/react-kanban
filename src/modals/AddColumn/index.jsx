import './AddColumn.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '../../components/TextField';
import Button from '../../components/Button/index';
import { showModal } from '../../store/slices/modalSlice';
import { updateBoard } from '../../store/slices/boardsSlice';
import { mainApi } from '../../utils/api/mainApi';
import { generateRandomColor } from '../../utils/randomColor';

const AddColumn = () => {
  const [newColumn, setNewColumn] = useState('');
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards.boards);
  const activeBoardId = useSelector(state => state.activeBoardId.activeBoardId);

  // Создание id для колонки
  const createNewColumnId = () => {
    if (boards.length !== 0) {
      const currentBoard = boards.find(board => board.id === activeBoardId);
      const columnId = currentBoard.columns.length + 1;
      return columnId;
    }
    return '';
  };

  // Создание объекта новой колонки
  const createNewColumn = () => {
    const newColumnObj = {
      name: newColumn.name,
      columnId: `${activeBoardId}_${createNewColumnId()}`,
      color: generateRandomColor()
    };
    return newColumnObj;
  };

  // Обрабатываю нажатие кнопки Add Column
  const handleSubmit = event => {
    event.preventDefault();
    // Проверяю есть ли доски вообще
    if (boards.length === 0) {
      return '';
    }
    // Выбираю активную доску из массива всех досок
    let currentBoard = boards.find(board => board.id === activeBoardId);
    setNewColumn('');
    // Извлекаю колонки из активной доски
    let { columns } = currentBoard;
    // Добавляю новоую колнку
    columns = [...columns, createNewColumn()];
    // Обновляю объект активной доски
    currentBoard = {
      ...currentBoard,
      columns
    };
    // Обновляю доску с новой колонкой на бэке. Ответ сохраняю store
    mainApi
      .updateBoard(currentBoard)
      .then(res => dispatch(updateBoard(res)))
      .catch(err => console.log(err));
    // Закрываю окно
    dispatch(showModal());
  };

  return (
    <div className='add-column'>
      <h3 className='add-column__title'>Add New Column</h3>
      <form className='add-column__form' onSubmit={handleSubmit}>
        <label className='add-column__column-name'>
          <p className='add-column__input-title'>Name</p>
          <TextField placeholder='e. g. Todo' type='text' setResult={setNewColumn} name='name' />
        </label>
        <div className='add-column__wrapper'>
          <Button label='Add Column' isFullWidth fnSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AddColumn;
