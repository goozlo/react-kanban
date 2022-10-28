/* eslint-disable react/button-has-type */
import './NewBoard.scss';
import React from 'react';

import Button from '../../components/Button';
import { TextField } from '../../components/TextField';
import { Delete } from './Delete';
import { mainApi } from '../../utils/api/mainApi.js';
import { showModal } from '@store/slices/modalSlice';
import { useSelector, useDispatch } from 'react-redux';

export const AddBoard = () => {
  const [result, setResult] = React.useState();

  const dispatch = useDispatch();
  const { type } = useSelector(state => state?.modal);

  function handleNewBoard(e) {
    e.preventDefault();
    console.log(result, 'result');
    mainApi
      .addNewBoard(result)
      .then(res => {
        console.log(res);
      })
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
          <div className='add-board__column-name'>
            <TextField
              placeholder='Columns'
              type='text'
              style={{ width: '100%' }}
              name='columnsName'
              setResult={setResult}
            />
            <Delete />
          </div>
        </label>
        <Button label='+ Add New Column' isFullWidth isSecondary />
        <Button label='Create New Board' isFullWidth fn={handleNewBoard} />
      </form>
    </div>
  );
};
