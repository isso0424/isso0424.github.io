import React from "react";
import { SkillCategory } from "../type/skill";
import { Skill } from "./Skill";
import "./SkillsFrame.scss";

export const SkillsFrame: React.FC<SkillCategory> = (props: SkillCategory) => {
  const { category, skills } = props;

  return (
    <>
      <h2>{category}</h2>
      <div className="skill-frame">
        {skills.map((skill) => (
          <Skill
            name={skill.name}
            imageURL={skill.imageURL}
            width={skill.width}
            height={skill.height}
          />
        ))}
      </div>
    </>
  );
};
