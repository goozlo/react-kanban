import React from 'react';
import { Toggle } from '../Toggle';
import './sideBar.scss';
import { BoardsList } from './BoardsList';
import SideBarStatus from './SideBarStatus';
import { NewBoardBtn } from '../../modals/AddBoard/NewBoardBtn';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
        <BoardsList />
        <NewBoardBtn />
        <Toggle />
        <SideBarStatus />
      </div>
    </div>
  );
};

export default SideBar;
