import React from 'react';
import { Toggle } from '@components/Toggle/Toggle';
import { BoardsList } from './BoardsList';
import SideBarStatus from './SideBarStatus';
import cn from 'classnames';
import './sideBar.scss';

const SideBar = ({ classname, props }) => (
  <div className={cn('sidebar', classname)} {...props}>
    <div className='sidebar__container'>
      <BoardsList />
      <Toggle />
      <SideBarStatus />
    </div>
  </div>
);

export default SideBar;
