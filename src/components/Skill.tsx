import React from "react";
import { Skill as SkillProps } from "../type/skill";

export const Skill: React.FC<SkillProps> = (props: SkillProps) => {
  const { name, imageURL } = props;

  return (
    <div className="skill">
      {name}
      {imageURL != null ? (
        <img alt={name} src={imageURL} className="skill-image" />
      ) : (
        <></>
      )}
    </div>
  );
};
