import React from "react";
import { Toggle } from "../Toggle";
import { Link } from "react-router-dom";
import "./sideBar.scss";
import BordsList from "./BordsList";

const SideBar = () => {

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__container">
          <BordsList />
          <Toggle />
          <button className='sidebar__hide-btn' type='button'>
            <div className='sidebar__hide-icon'></div>
            <span className='sidebar__hide-title'>Hide Sidebar</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
