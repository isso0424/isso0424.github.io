import React from "react";
import "./Contact.scss";

interface Props {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  alt: string;
  text: string;
  width: number;
  height: number;
}

export const Contact: React.FC<Props> = (props: Props) => {
  const { url, image, alt, text, width, height } = props;

  return (
    <a href={url} className="contact-button">
      <img
        src={image}
        alt={alt}
        className="contact-link"
        style={{ aspectRatio: (width / height).toString() }}
      />
      <span className="contact-text">{text}</span>
    </a>
  );
};
