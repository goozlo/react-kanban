import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '@store/slices/modalSlice';
import { mainApi } from '../../utils/api/mainApi';
import './Remove.scss';
import { removeBoard } from '../../store/slices/boardsSlice';

export const Remove = () => {
  const activeBoardId = useSelector(state => state.activeBoardId.activeBoardId);
  const dispatch = useDispatch();
  const { type } = useSelector(state => state?.modal);

  function closeModal() {
    dispatch(showModal(type));
  }

  const handleOnClickDelete = () => {
    mainApi
      .deleteBoard(activeBoardId)
      .then(() => dispatch(removeBoard(activeBoardId)))
      .catch(err => console.error(err))
      .finally(closeModal());
  };

  return (
    <div className='remove-modal'>
      <div className='remove-modal__wrapper'>
        <h3 className='remove-modal__title'>Delete this board?</h3>

        <p className='remove-modal__text'>
          Are you sure you want to delete the `Platform Launch` board? This action will remove all columns and tasks and
          cannot be reversed.
        </p>
        <div className='remove-modal__buttons'>
          <button className='remove-modal__remove-item' onClick={handleOnClickDelete}>
            Delete
          </button>
          <button className='remove-modal__cancel-remove' onClick={() => dispatch(showModal(type))}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
