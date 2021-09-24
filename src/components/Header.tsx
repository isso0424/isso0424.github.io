import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import icon from "../static/header_icon.webp";

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
        {headerContents.map((content, index) => (
          <li
            key={index}
            className={
              location.pathname === content.link
                ? "current-page"
                : "header-item"
            }
          >
            <Link to={content.link} className="link">
              <span className="header-text">{content.message}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
