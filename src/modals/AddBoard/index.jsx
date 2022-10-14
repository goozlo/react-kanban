/* eslint-disable react/button-has-type */
import './NewBoard.scss';

import Button from '../../components/Button';
import { TextField } from '../../components/TextField';
import { Delete } from './Delete';

export const AddBoard = () => (
  <div className='add-board'>
    <h3 className='add-board__title'>Add New Board</h3>
    <form className='add-board__form'>
      <label className='add-board__board-name'>
        <p className='add-board__input-title'>Name</p>
        <TextField placeholder='Name' type='text' />
      </label>
      {/* create logic */}
      <label className='add-board__create-column'>
        <p className='add-board__input-title'>Columns</p>
        <div className='add-board__column-name'>
          <TextField placeholder='Columns' type='text' style={{ width: '100%' }} />
          <Delete />
        </div>
      </label>
      <Button label='+ Add New Column' isFullWidth isSecondary />
      <Button label='Create New Board' isFullWidth />
    </form>
  </div>
);
