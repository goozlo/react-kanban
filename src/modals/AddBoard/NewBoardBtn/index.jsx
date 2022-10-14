import { useDispatch } from 'react-redux';
import { showModal } from '../../../store/slices/modalSlice';
import '../NewBoard.scss';

export const NewBoardBtn = () => {
  const dispatch = useDispatch();

  return (
    <div className='new-board'>
      <span className='new-board__icon' />
      <button type='submit' className='new-board__btn' onClick={() => dispatch(showModal('AddBoard'))}>
        + Create New Board
      </button>
    </div>
  );
};
