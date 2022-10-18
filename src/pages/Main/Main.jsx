import React from 'react';
import SideBar from '@components/SideBar/index';
import Header from '@components/Header/index';
import Board from '@components/Board/index';
import './Main.scss';

export function Main({ boards, columns, handleClickProperBoard, tasks }) {
  
  return (
    <main className='main'>
      <Header />
      <div className='main__container'>
        <SideBar 
          boards={boards} 
          columns={columns} 
          handleClickProperBoard={handleClickProperBoard} 
        />
        <Board columns={columns} tasks={tasks} />
      </div>
    </main>
  );
}
