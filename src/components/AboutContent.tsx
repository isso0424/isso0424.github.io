import React from "react";
import "./AboutContent.scss";

interface Props {
  attribute: string;
  content: string;
}

export const AboutContent: React.FC<Props> = (props: Props) => {
  const { attribute, content } = props;
  return (
    <>
      <p className="about-content">
        <span className="about-attribute">{attribute}: </span>
        {content}
      </p>
    </>
  );
};
