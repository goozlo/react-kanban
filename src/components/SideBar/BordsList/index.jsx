import React from "react";
import { Link } from "react-router-dom";
import "./bordsList.scss";
import {bords} from "../../../TEMP_DATA_BASE"


const BordsList = () => {
  return (
    <div className="bordsList">
      <h2 className="bordslist__count">ALL BOARDS ({bords.length})</h2>
      <div className="bordsList__links">
        {bords.map(bord => <div className="link-box">
        <span className="bordsList__link-icon"></span>
        <Link className="bordsList__link" key={bord.bord_id}>{bord.bordName}</Link></div>)}
      </div>
    </div>
  );
};

export default BordsList;
