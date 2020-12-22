import React from "react";
import { Work } from "../components/Work";

const works = [
  {
    title: "title",
    text: "text",
  },
];

export const WorksPage: React.FC = () => (
  <div className="page">
    {works.map((work) => (
      <Work title={work.title} text={work.text} />
    ))}
  </div>
);
