/* eslint-disable react/button-has-type */
import './NewBoard.scss';
import React from 'react';
import { showModal } from '@store/slices/modalSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { TextField } from '../../components/TextField';
import { mainApi } from '../../utils/api/mainApi';
import { addNewBoard } from '../../store/slices/boardsSlice';

export const AddBoard = () => {
  const [result, setResult] = React.useState();
  const [columnsFields, setColumnsFields] = React.useState(1);

  const dispatch = useDispatch();
  const { type } = useSelector(state => state?.modal);
  const boards = useSelector(state => state.boards.boards);

  const handelColumnAddClick = e => {
    e.preventDefault();
    setColumnsFields(columnsFields + 1);
  };

  //  Отрисовывает неообходимое количество элементов с полями для названий колонок
  const columnFieldsElements = () => {
    const content = [];
    for (let i = 1; i <= columnsFields; i++) {
      content.push(
        <div className='add-board__column' id={i} key={i}>
          <TextField
            placeholder='Columns'
            type='text'
            style={{ width: '100%' }}
            name='columnsName'
            setResult={setResult}
          />
          <div
            className='add-board__column-field-delete'
            onClick={() => alert('Функция удаления поля названия колонки')}
          />
        </div>
      );
    }
    return content;
  };

  // Создаем объект доски для отправки на бэк
  const createNewBoardObj = data => {
    const newBoardObj = {
      name: data.boardName,
      id: boards.length + 1,
      columns: [
        {
          name: data.columnsName,
          columnId: `${boards.length + 1}_1`
        }
      ]
    };
    return newBoardObj;
  };

  // Обработчик нажатия на кнопку добавить доску
  function handleNewBoard(e) {
    e.preventDefault();
    // Используем функцию Создания объекта новой доски
    const newBoard = createNewBoardObj(result);
    // Отпправляем на бэк
    mainApi
      .addNewBoard(newBoard)
      .then(res => {
        // Возвращенный объект с бэк добавляем в массив досок в Store
        dispatch(addNewBoard(res));
      })
      .catch(err => console.error(err))
      .finally(dispatch(showModal(type)));
  }

  return (
    <div className='add-board'>
      <h3 className='add-board__title'>Add New Board</h3>
      <form className='add-board__form'>
        <label className='add-board__board-name'>
          <p className='add-board__input-title'>Name</p>
          <TextField placeholder='Name' type='text' name='boardName' setResult={setResult} />
        </label>
        {/* create logic */}
        <label className='add-board__create-column'>
          <p className='add-board__input-title'>Columns</p>
          <div className='add-board__column-name'>{columnFieldsElements()}</div>
        </label>
        <Button label='+ Add New Column' isFullWidth isSecondary fn={handelColumnAddClick} />
        <Button label='Create New Board' isFullWidth fn={handleNewBoard} />
      </form>
    </div>
  );
};
