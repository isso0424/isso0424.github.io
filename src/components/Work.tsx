import React from "react";
import "./Work.scss";

interface Props {
  title: string;
  text: string;
}

export const Work: React.FC<Props> = (props: Props) => {
  const { title, text } = props;
  return (
    <div className="work-card">
      <h3 className="work-title">{title}</h3>
      <p className="work-text">{text}</p>
    </div>
  );
};
