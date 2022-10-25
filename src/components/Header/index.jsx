/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch } from 'react-redux';
import Dots from '@assets/images/dots.svg';
import { EditMenu } from '@components/EditMenu';
import { showModal } from '../../store/slices/modalSlice';
import './header.scss';

// const TEMP_DATA_FOR_POPUP = [
//   {
//     label: 'Edit Board',
//     color: '#828FA3'
//   },
//   {
//     label: 'Delete Board',
//     color: '#EA5555'
//   }
// ];

const Header = () => {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = React.useState(false);

  const TEMP_DATA_FOR_POPUP = [
    {
      label: 'Edit Board',
      color: '#828FA3',
      action: () => dispatch(showModal('EditBoard'))
    },
    {
      label: 'Delete Board',
      color: '#EA5555',
      action: () => dispatch(showModal('Remove'))
    }
  ];

  const clickOnEditBordMenu = e => {
    e.preventDefault();
    setShowEdit(prev => !prev);
  };

  return (
    <header className='header'>
      <div className='header__logo'>
        <h1 className='header__title'>kanban</h1>
      </div>
      <div className='header__main'>
        <h2 className='header__desk-title'>Platform Launch</h2>

        <div className='header__buttons'>
          <button className='header__new-task' onClick={() => dispatch(showModal('CreateTask'))}>
            + Add New Task
          </button>
          <div className='action-menu'>
            <img className='action-menu__dots' onClick={clickOnEditBordMenu} src={Dots} alt='action-menu' />
            <EditMenu options={TEMP_DATA_FOR_POPUP} width='200px' show={showEdit} setShowEdit={setShowEdit} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
