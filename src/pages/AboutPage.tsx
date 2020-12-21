import React from "react";
import { AboutContent } from "../components/AboutContent";

const profiles = [
  {
    attribute: "School",
    content: "NIT-IbarakiCollege",
  },
  {
    attribute: "Grade",
    content: "2nd Grade",
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
    <h1>About</h1>
    {profiles.map((profile) => (
      <AboutContent attribute={profile.attribute} content={profile.content} />
    ))}
  </>
);
