import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { mainApi } from '../../utils/api/mainApi';
import { TextField } from '../../components/TextField';
import './EditBoard.scss';
import { updateBoard } from '../../store/slices/boardsSlice';
import { showModal } from '../../store/slices/modalSlice';

export const EditBoard = () => {
  const [boardName, setBoardName] = React.useState();
  const [columnName, setColumnName] = React.useState();

  const activeBoardId = useSelector(state => state.activeBoardId.activeBoardId);
  const boards = useSelector(state => state.boards.boards);
  const activeBoard = boards.find(board => board.id === activeBoardId);

  const dispatch = useDispatch();

  console.log(columnName)
  const handleSaveClick = e => {
    e.preventDefault();
    ///надо подумать над редактированием колонок
    const boardData = { ...activeBoard, name: boardName.bordName, columns: [{ name: columnName.name }] };
    mainApi
      .updateBoard(boardData)
      .then(res => {
        dispatch(updateBoard(res));
        dispatch(showModal());
      })
      .catch(err => console.log(err));
  };

  function handelColumnAddClick(e) {
    e.preventDefault();
    alert('add new column')
  }

  return (
    <div className='edit-board'>
      <h3 className='edit-board__title'>Edit Board</h3>
      <form className='edit-board__form' onSubmit={handleSaveClick}>
        <label className='edit-board__board-name'>
          <p className='edit-board__input-title'>Board name</p>
          <TextField
            placeholder='Name'
            type='text'
            style={{ width: '100%' }}
            name='bordName'
            setResult={setBoardName}
            initialValue={activeBoard.name}
          />
          <p className='edit-board__input-title'>Edit columns</p>
          <div className='add-board__column-name'>
            {activeBoard.columns.map(column => (
              <div className='add-board__column'
                key={column.columnId} >
                <TextField
                  placeholder='Columns'
                  type='text'
                  style={{ width: '100%' }}
                  name='name'
                  columnId={column.columnId}
                  setResult={setColumnName}
                  initialValue={column.name}
                />
                <div
                  className='add-board__column-field-delete'
                  onClick={() => alert('Удаление колонки')}
                />
              </div>
            ))}
            <Button label='+ Add New Column' isFullWidth isSecondary fn={handelColumnAddClick} />
          </div>
        </label>
        <Button label='Save Changes' isFullWidth fnSubmit={handleSaveClick} />
      </form>
    </div>
  );
};
