import React from 'react';
import { Toggle } from '../Toggle';
import './sideBar.scss';
import { BoardsList } from './BoardsList';
import SideBarStatus from './SideBarStatus';
import { NewBoardBtn } from '../../modals/AddBoard/NewBoardBtn';
import { useSelector, useDispatch } from 'react-redux';
import SideBarButton from './SideBarButton';
import useMediaQuery from '../../utils/hooks/useMediaQuery'
import { useEffect } from 'react';
import { hideSideBar } from '@store/slices/sideBarSlice';
const SideBar = ({ boards, handleClickProperBoard }) => {
  const isMobile = useMediaQuery('(max-width: 696px)');
  const { isHidden } = useSelector(state => state.sideBar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMobile) {
      dispatch(hideSideBar())
    }
  }, [isMobile]);
  return (
    <>
      <div className={`sidebar ${isHidden && 'hidden'}`}>
        <div className='sidebar__container'>
          <BoardsList boards={boards} handleClickProperBoard={handleClickProperBoard} />
          <NewBoardBtn />
          <Toggle />
          {isMobile ? '' : <SideBarStatus />}
        </div>
      </div>
      {isMobile ? '' : <SideBarButton />}

    </>
  );
};

export default SideBar;
