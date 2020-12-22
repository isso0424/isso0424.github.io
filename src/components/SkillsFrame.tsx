import React from "react";
import { SkillCategory } from "../type/skill";
import { Skill } from "./Skill";
import "./SkillsFrame.scss";

export const SkillsFrame: React.FC<SkillCategory> = (props: SkillCategory) => {
  const { category, skills } = props;

  return (
    <>
      <h3>{category}</h3>
      <div className="skill-frame">
        {skills.map((skill) => (
          <Skill name={skill.name} imageURL={skill.imageURL} />
        ))}
      </div>
    </>
  );
};
