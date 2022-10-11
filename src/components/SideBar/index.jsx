import React from "react";
import { Toggle } from "../Toggle";
import "./sideBar.scss";
import BordsList from "./BordsList";
import SideBarStatus from "./SideBarStatus";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <BordsList />
        <Toggle />
        <SideBarStatus />
      </div>
    </div>
  );
};

export default SideBar;
