import React from "react";

interface Props {
  name: string;
  imageURL?: string;
}

export const Skill: React.FC<Props> = (props: Props) => {
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
