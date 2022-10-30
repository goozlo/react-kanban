import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { mainApi } from '../../utils/api/mainApi';
import { TextField } from '../../components/TextField';
import './EditBoard.scss';
import { updateBoard } from '../../store/slices/boardsSlice';
import { showModal } from '../../store/slices/modalSlice';

export const EditBoard = () => {
  const [result, setResult] = React.useState();

  const activeBoardId = useSelector(state => state.activeBoardId.activeBoardId);
  const boards = useSelector(state => state.boards.boards);
  const activeBoard = boards.find(board => board.id === activeBoardId);

  const dispatch = useDispatch();

  const handleSaveClick = e => {
    e.preventDefault();
    const newNamedBoard = { ...activeBoard, name: result.bordName };
    mainApi
      .updateBoard(newNamedBoard)
      .then(res => {
        dispatch(updateBoard(res));
        dispatch(showModal());
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='edit-board'>
      <h3 className='edit-board__title'>Edit Board</h3>
      <form className='edit-board__form' onSubmit={handleSaveClick}>
        <label className='edit-board__board-name'>
          <p className='edit-board__input-title'>Name</p>
          <TextField
            placeholder='Name'
            type='text'
            style={{ width: '100%' }}
            name='bordName'
            setResult={setResult}
            initialValue={activeBoard.name}
          />
        </label>
        <Button label='Save Changes' isFullWidth fnSubmit={handleSaveClick} />
      </form>
    </div>
  );
};
