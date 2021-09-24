import React from "react";
import { AboutContent } from "../components/AboutContent";

const profiles = [
  {
    attribute: "School",
    content: "NIT-IbarakiCollege",
  },
  {
    attribute: "Grade",
    content: "3rd Grade",
  },
  {
    attribute: "BirthDay",
    content: "2003/04/24",
  },
  {
    attribute: "Hobby",
    content: "Self made PC",
  },
];

export const AboutPage: React.FC = () => (
  <>
    <div className="page">
      <h1>About</h1>
      <div className="main">
        {profiles.map((profile, index) => (
          <AboutContent
            key={index}
            attribute={profile.attribute}
            content={profile.content}
          />
        ))}
      </div>
    </div>
  </>
);
