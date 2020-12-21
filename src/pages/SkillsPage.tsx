import React from "react";
import { SkillsFrame } from "../components/SkillsFrame";
import { SkillCategory } from "../type/skill";
import ReactIcon from "../static/react-icon.png";

const skills: Array<SkillCategory> = [
  {
    category: "FrontEnd",
    skills: [
      {
        name: "React",
        imageURL: ReactIcon,
      },
    ],
  },
  {
    category: "BackEnd",
    skills: [
      {
        name: "Node.js",
      },
      {
        name: "Django",
      },
    ],
  },
];

export const SkillsPage: React.FC = () => (
  <>
    <h1>Skills</h1>
    {skills.map((category) => (
      <SkillsFrame category={category.category} skills={category.skills} />
    ))}
  </>
);
