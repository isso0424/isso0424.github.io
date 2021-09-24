import React from "react";
import { Skill as SkillProps } from "../type/skill";
import "./Skill.scss";

interface ImageProps {
  width: number;
  height: number;
}

export const Skill: React.FC<SkillProps & ImageProps> = (
  props: SkillProps & ImageProps,
) => {
  const { name, imageURL, width, height } = props;

  return (
    <div className="skill">
      {imageURL != null ? (
        <img
          alt={name}
          src={imageURL}
          className="skill-image"
          style={{ aspectRatio: (width / height).toString() }}
        />
      ) : (
        <></>
      )}
      {name}
    </div>
  );
};
