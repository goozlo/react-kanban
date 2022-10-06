import React from 'react';
import {useDispatch} from "react-redux";
import {showModal} from "../../store/slices/modalSlice";
import './header.scss'

const Header = () => {
    const dispatch = useDispatch()

    return (
        <header className="header">
            <div className='header__logo'>
                <h1 className='header__title'>kanban</h1>
            </div>
            <div className='header__main'>
                <h2 className='header__desk-title'>Platform Launch</h2>

                <div className='header__buttons'>
                    <button className='header__new-task' onClick={() => dispatch(showModal())}>+ Add New Task</button>
                    <button className='header__board-settings'>...</button>
                </div>
            </div>
        </header>
    )

};

export default Header;
