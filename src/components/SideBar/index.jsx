import React from 'react';
import ThemeSwiper from '../ThemeSwiper/index';
import { Link } from "react-router-dom";
import './sideBar.scss'

const SideBar = () => {


  return (<>

    <div className="sidebar">
      <div className="sidebar__container">
        <div className='sidebar__nav'>
          <h2 className=''>ALL BOARDS (3)</h2>
          <div className='sidebar__links'>
            <Link className='sidebar__link'> Доска 1</Link>
            <Link className='sidebar__link'> Доска 2</Link>
          </div>
        </div>

        <ThemeSwiper />

      </div>

    </div>
  </>)

};

export default SideBar;