import React from 'react';
import Button from '../../components/Button';
import { TextField } from '../../components/TextField';
import { Delete } from '../AddBoard/Delete';
import './EditBoard.scss';

export const EditBoard = () => {
  const [result, setResult] = React.useState();

  return (
    <div className='edit-board'>
      <h3 className='edit-board__title'>Edit Board</h3>
      <form className='edit-board__form'>
        <label className='edit-board__board-name'>
          <p className='edit-board__input-title'>Name</p>
          <TextField
            placeholder='Name'
            type='text'
            style={{ width: '100%' }}
            name='columnsName'
            setResult={setResult}
          />
        </label>
        <label className='edit-board__create-column'>
          <p className='edit-board__input-title'>Columns</p>
          <div className='edit-board__column-name'>
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
        <Button label='Save Changes' isFullWidth />
      </form>
    </div>
  );
};
