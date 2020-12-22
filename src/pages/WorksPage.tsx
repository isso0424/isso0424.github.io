import React from "react";
import { Work } from "../components/Work";
import "./WorksPage.scss";

const works = [
  {
    title: "Rocat",
    text: "texttexttexttexttexttexttext",
  },
  {
    title: "AdvancedBlackboard",
    text: "texttexttexttexttexttexttext texttexttexttexttexttexttext",
  },
  {
    title: "IoTMagicCane",
    text: "texttextexttext",
  },
  {
    title: "ElectricityProtectGame",
    text: "texttexttext texttexttexttext texttexttexttext texttexttext",
  },
  {
    title: "ElderlyHome",
    text: "texttexttexttexttexttexttext texttexttexttexttexttexttext",
  },
  {
    title: "Pucis",
    text: "texttexttexttexttexttexttext texttexttexttexttexttexttext",
  },
];

export const WorksPage: React.FC = () => (
  <div className="page">
    <h1>Works</h1>
    <div className="works">
      {works.map((work) => (
        <Work title={work.title} text={work.text} />
      ))}
    </div>
  </div>
);
