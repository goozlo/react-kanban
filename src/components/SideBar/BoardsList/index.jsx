import React from 'react';
import { Link } from 'react-router-dom';
import './boardsList.scss';

export const BoardsList = ({boards}) => {
  return (
    <div className='boardsList'>
      <h2 className='boardsList__count'>ALL BOARDS ({boards.length})</h2>
      <div className='boardsList__links'>
        {boards.map(bord => (
          <div className='link-box' key={bord.bord_id}>
            <span className='boardsList__link-icon'></span>
            <Link className='boardsList__link'>{bord.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
