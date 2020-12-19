import React from "react";
import "./Contact.scss";

interface Props {
  url: string;
  image: any;
  alt: string;
}

export const Contact: React.FC<Props> = (props: Props) => {
  const { url, image, alt } = props;

  return (
    <a href={url} className="contact-button">
      <img src={image} alt={alt} className="contact-link" />
    </a>
  );
};
