import React from 'react';
import { Link } from 'react-router-dom';
import './boardsList.scss';
import { useSelector } from 'react-redux';

export const BoardsList = ({ handleClickProperBoard }) => {
  // Достаем доски из Store
  const boards = useSelector(state => state.boards.boards);

  // Достаем id из Store
  const activeBoardId = useSelector(state => state.activeBoardId.activeBoardId);

  // Обрабатываем клик по конкретной доске и передаем в функцию handleClickProperBoard id доски
  const handleClickBoard = boardId => {
    handleClickProperBoard(boardId);
  };

  return (
    <div className='boardsList'>
      <h2 className='boardsList__count'>ALL BOARDS ({boards.length})</h2>
      <div className='boardsList__links'>
        {boards.map(bord => (
          <div className={`link-box-wrapper ${bord.id === activeBoardId ? 'link-box-wrapper_status_active' : ''}`}>
            <div className={'link-box'} key={bord.id} onClick={() => handleClickBoard(bord.id)}>
              <span className='boardsList__link-icon' />
              <Link className='boardsList__link'>{bord.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
