import React from 'react';
import SideBar from '@components/SideBar/index';
import Header from '@components/Header/index';
import Board from '@components/Board/index';
import './Main.scss';

export function Main() {
  return (
    <main className='main'>
      <Header />
      <div className='main__container'>
        <SideBar />
        <Board />
      </div>
    </main>
  );
}
