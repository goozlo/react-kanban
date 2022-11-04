/* eslint-disable react/button-has-type */
import './NewBoard.scss';
import React from 'react';
import { showModal } from '@store/slices/modalSlice';
import uniqid from 'uniqid';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { TextField } from '../../components/TextField';
import { mainApi } from '../../utils/api/mainApi';
import { addNewBoard } from '../../store/slices/boardsSlice';
import { setActiveBoardId } from '../../store/slices/activeBoardId';
import { generateRandomColor } from '../../utils/randomColor';

export const AddBoard = () => {
  const [result, setResult] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [columnsFields, setColumnsFields] = React.useState(1);

  const dispatch = useDispatch();
  const { type } = useSelector(state => state?.modal);
  const boards = useSelector(state => state.boards.boards);

  const handelColumnAddClick = e => {
    e.preventDefault();
    setColumnsFields(columnsFields + 1);
  };

  console.log(result);

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
            name={`columnName ${i}`}
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
    // Генерируем уникальный id для доски используя библиотеку
    const boardId = boards.length + 1;
    let newBoardObj = {};
    const columnsArray = [];
    // Проверяем на заполненность поля названия колонки
    if (data.length > 1) {
      data.map((item, index) => {
        if (Object.keys(item)[0] !== 'boardName') {
          columnsArray.push({
            name: Object.values(item)[0],
            columnId: `${boardId}_${index}`,
            color: generateRandomColor()
          });
        }
        return;
      });

      newBoardObj = {
        name: data[0].boardName,
        id: boardId,
        columns: columnsArray
      };
    } else {
      newBoardObj = {
        name: data.boardName,
        id: boards.length + 1,
        columns: []
      };
    }
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
        dispatch(setActiveBoardId(res.id));
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
          <TextField
            placeholder='Name'
            type='text'
            name='boardName'
            setResult={setResult}
            setIsDisabled={setIsDisabled}
          />
        </label>
        <label className='add-board__create-column'>
          <p className='add-board__input-title'>Columns</p>
          <div className='add-board__column-name'>{columnFieldsElements()}</div>
        </label>
        <Button label='+ Add New Column' isFullWidth isSecondary fn={handelColumnAddClick} />
        {isDisabled ? (
          <Button label='Create New Board' isFullWidth disabled />
        ) : (
          <Button label='Create New Board' isFullWidth fn={handleNewBoard} />
        )}
      </form>
    </div>
  );
};
