import React from "react";
import { SkillCategory } from "../type/skill";
import { Skill } from "./Skill";

export const SkillsFrame: React.FC<SkillCategory> = (props: SkillCategory) => {
  const { category, skills } = props;

  return (
    <div className="skill-frame">
      <h3>{category}</h3>
      {skills.map((skill) => (
        <Skill name={skill.name} imageURL={skill.imageURL} />
      ))}
    </div>
  );
};
