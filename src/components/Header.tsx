import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

/* "Top", "About", "Skill", "Works", "Contact" */
const headerContents = [
  {
    message: "Top",
    link: "/",
  },
  {
    message: "About",
    link: "/",
  },
  {
    message: "Skill",
    link: "/",
  },
  {
    message: "Works",
    link: "/",
  },
  {
    message: "Contact",
    link: "/",
  },
];

export const Header: React.FC = () => (
  <div className="header">
    <ul className="header-menu">
      {headerContents.map((content) => (
        <Link to={content.link} className="link">
          <li className="header-item">
            <span className="header-text">{content.message}</span>
          </li>
        </Link>
      ))}
    </ul>
  </div>
);
