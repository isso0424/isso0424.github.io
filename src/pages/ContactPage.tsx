import React from "react";
import { Contact } from "../components/Contact";

import TwitterLogo from "../static/Twitter_Social_Icon_Circle_Color.svg";
import FacebookLogo from "../static/f_logo_RGB-Blue_1024.png";
import OctoCat from "../static/Octocat.png";
import "./ContactPage.scss";

const contacts = [
  {
    url: "https://twitter.com/kousou4129",
    alt: "twitter",
    image: TwitterLogo,
    text: "@kousou4129",
  },
  {
    url: "https://facebook.com/isso0424",
    alt: "facebook",
    image: FacebookLogo,
    text: "KotaIsozaki",
  },
  {
    url: "https://github.com/isso0424",
    alt: "GitHub",
    image: OctoCat,
    text: "isso0424",
  },
];

export const ContactPage: React.FC = () => (
  <div className="page">
    <h1>Contact</h1>
    <div className="contact-main">
      {contacts.map((contact) => (
        <Contact
          url={contact.url}
          alt={contact.alt}
          image={contact.image}
          text={contact.text}
        />
      ))}
    </div>
  </div>
);
