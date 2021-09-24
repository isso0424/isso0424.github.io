import React from "react";
import { RouteProps } from "react-router";
import icon from "../static/PC_icon.webp";
import "./TopPage.scss";

export const TopPage: React.FC<RouteProps> = () => (
  <div className="page top-page">
    <img src={icon} alt="isso0424 icon" className="top-page-icon" />
    <h3>isso0424</h3>
    <h1>Kota Isozaki</h1>
  </div>
);
