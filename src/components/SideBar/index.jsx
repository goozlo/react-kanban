import React from 'react';
import {Swiper} from '../Swiper'
import {Link} from "react-router-dom";
import './sideBar.scss'
import BordsList from './BordsList';

const SideBar = () => {


  return (<>

    <div className="sidebar">
      <div className="sidebar__container">
        <BordsList/>
        <Swiper/>
      </div>
    </div>
  </>)

};

export default SideBar;
