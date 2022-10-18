import React from 'react';
import { Toggle } from '../Toggle';
import './sideBar.scss';
import { BoardsList } from './BoardsList';
import SideBarStatus from './SideBarStatus';
import { NewBoardBtn } from '../../modals/AddBoard/NewBoardBtn';
import { useDispatch, useSelector } from 'react-redux';
import { hideSideBar } from '@store/slices/sideBarSlice';
import open from '@assets/images/eye.svg'

const SideBar = ({boards}) => {

  const { isHidden } = useSelector(state => state.sideBar);
  const dispatch = useDispatch();
  return (
    <>
      <div className={`sidebar ${isHidden && 'hidden'}`}>
        <div className='sidebar__container'>
          <BoardsList boards={boards} />
          <NewBoardBtn />
          <Toggle />
          <SideBarStatus />
        </div>
      </div>

      <button className={`hidden-sidebar ${isHidden && 'open-sideBar'}`} onClick={() => dispatch(hideSideBar())}>
<img className='open-sideBar-img' src={open}/>
      </button>
    </>
  );
};

export default SideBar;
