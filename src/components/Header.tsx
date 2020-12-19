import React from "react";
import "./Header.scss";

const headerContents = ["Top", "About", "Skill", "Works", "Contact"];

export const Header: React.FC = () => (
  <div className="header">
    <ul className="header-menu">
      {headerContents.map((content) => (
        <li className="header-item">
          <span className="header-text">{content}</span>
        </li>
      ))}
    </ul>
  </div>
);
