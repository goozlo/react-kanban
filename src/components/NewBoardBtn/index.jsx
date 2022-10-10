import { useDispatch } from 'react-redux';
import { showModal } from '../../store/slices/modalSlice';

export const NewBoardBtn = () => {
  const dispatch = useDispatch();

  return (
    <button className="new-board" 
      onClick={() => dispatch(showModal('AddBoard'))}>
        + Create New Board
      </button>
  );
};
