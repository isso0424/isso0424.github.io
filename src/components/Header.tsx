import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import icon from "../static/PC_icon.jpg";

/* "Top", "About", "Skill", "Works", "Contact" */
const headerContents = [
  {
    message: "Top",
    link: "/",
  },
  {
    message: "About",
    link: "/about",
  },
  {
    message: "Skill",
    link: "/skills",
  },
  {
    message: "Works",
    link: "/works",
  },
  {
    message: "Contact",
    link: "/contact",
  },
];

export const Header: React.FC = () => {
  const location = useLocation();
  return (
    <div className="header">
      <div className="title">
        <img src={icon} alt="isso0424's icon" className="icon" />
        <p className="text">isso0424</p>
      </div>
      <ul className="header-menu">
        {headerContents.map((content) => (
          <Link to={content.link} className="link">
            <li
              className={
                location.pathname === content.link
                  ? "current-page"
                  : "header-item"
              }
            >
              <span className="header-text">{content.message}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
