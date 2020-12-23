import React from "react";
import { RouteProps } from "react-router";
import icon from "../static/PC_icon.jpg";
import "./TopPage.scss";

export const TopPage: React.FC<RouteProps> = () => (
  <div className="page">
    <img src={icon} alt="isso0424 icon" className="top-page-icon" />
    <h1>isso0424(Kota Isozaki)</h1>
  </div>
);
