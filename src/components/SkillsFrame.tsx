import React, { lazy, Suspense } from "react";
import { SkillCategory } from "../type/skill";
import "./SkillsFrame.scss";

const Skill = lazy(() => import("./Skill"));

export const SkillsFrame: React.FC<SkillCategory> = (props: SkillCategory) => {
  const { category, skills } = props;

  return (
    <>
      <h2>{category}</h2>
      <div className="skill-frame">
        {skills.map((skill) => (
          <Suspense key={skill.name} fallback={<p>loading...</p>}>
            <Skill
              name={skill.name}
              imageURL={skill.imageURL}
              width={skill.width}
              height={skill.height}
            />
          </Suspense>
        ))}
      </div>
    </>
  );
};
