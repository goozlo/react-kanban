import React from 'react';
import './MainPage.scss';
import SideBar from '@components/SideBar/index';
import Header from '@components/Header/index';
import Board from '@components/Board/index';

function MainPage() {
    return (
        <main className='main-page'>
            <Header />
            <div className='main-page__container'>
                <SideBar />
                <Board />
            </div>
        </main>
    );
}

export default MainPage;
