import Button from '../../components/Button';
import { TextField } from '../../components/TextField';
import { Delete } from '../AddBoard/Delete';

export const EditBoard = () => (
  <div className='Edit-board'>
    <h3 className='Edit-board__title'>Edit Board</h3>
    <form className='Edit-board__form'>
      <label className='Edit-board__board-name'>
        <p className='Edit-board__input-title'>Name</p>
        <TextField placeholder='Name' type='text' />
      </label>
      {/* create logic */}
      <label className='Edit-board__create-column'>
        <p className='Edit-board__input-title'>Columns</p>
        <div className='Edit-board__column-name'>
          <TextField placeholder='Columns' type='text' style={{ width: '100%' }} />
          <Delete />
        </div>
      </label>
      <Button label='+ Add New Column' isFullWidth isSecondary />
      <Button label='Save Changes' isFullWidth />
    </form>
  </div>
);
