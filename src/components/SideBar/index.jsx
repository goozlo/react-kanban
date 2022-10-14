import React from 'react';
import { Toggle } from '../Toggle';
import './sideBar.scss';
import BordsList from './BordsList';
import SideBarStatus from './SideBarStatus';
import { NewBoardBtn } from '../../modals/AddBoard/NewBoardBtn';

const SideBar = () => (
  <div className='sidebar'>
    <div className='sidebar__container'>
      <BordsList />
      <NewBoardBtn />
      <Toggle />
      <SideBarStatus />
    </div>
  </div>
);

export default SideBar;
