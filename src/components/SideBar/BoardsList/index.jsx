import React from 'react';
import { Link } from 'react-router-dom';
import './boardsList.scss';
import { bords } from '../../../TEMP_DATA_BASE';

export const BoardsList = () => {
  return (
    <div className='boardsList'>
      <h2 className='boardsList__count'>ALL BOARDS ({bords.length})</h2>
      <div className='boardsList__links'>
        {bords.map(bord => (
          <div className='link-box' key={bord.bord_id}>
            <span className='boardsList__link-icon'></span>
            <Link className='boardsList__link'>{bord.bordName}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
