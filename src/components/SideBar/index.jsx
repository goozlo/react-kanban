import React from 'react';
import ThemeSwiper from '../ThemeSwiper/index';
import { Link } from "react-router-dom";
import './sideBar.scss'
import BordsList from './BordsList';

const SideBar = () => {


  return (<>

    <div className="sidebar">
      <div className="sidebar__container">
        <BordsList />
        <ThemeSwiper />
      </div>

    </div>
  </>)

};

export default SideBar;
