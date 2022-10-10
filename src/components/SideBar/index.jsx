import React from "react";
import { Toggle } from "../Toggle";
import { Link } from "react-router-dom";
import "./sideBar.scss";
import BordsList from "./BordsList";
import { NewBoardBtn } from "../NewBoardBtn"

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__container">
          <BordsList />
          <NewBoardBtn />
          <Toggle />
        </div>
      </div>
    </>
  );
};

export default SideBar;
