import React from 'react';
import SideBar from '@components/SideBar/index';
import Header from '@components/Header/index';
import Board from '@components/Board/index';
import './Main.scss';

export function Main({boards}) {
  
  return (
    <main className='main'>
      <Header />
      <div className='main__container'>
        <SideBar boards={boards} />
        <Board />
      </div>
    </main>
  );
}
