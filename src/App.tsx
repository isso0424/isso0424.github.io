import React from "react";
import "./App.scss";
import { Contact } from "./components/Contact";
import facebook from "./static/facebook-icon.png";
import twitter from "./static/twitter-logo.svg";

const links = [
  {
    url: "https://facebook.com/isso0424",
    image: facebook,
    alt: "facebook",
  },
  {
    url: "https://twitter.com/kousou4129",
    image: twitter,
    alt: "twitter",
  },
];

const App: React.FC = () => (
  <div className="App-header">
    <header>
      <h1>isso0424 portfolio</h1>
    </header>
    <p>My portfolio under construction...</p>
    <h3>Contacts</h3>
    <div className="contacts">
      {links.map((link) => (
        <Contact
          url={link.url}
          image={link.image}
          alt={link.alt}
          key={link.alt}
        />
      ))}
    </div>
  </div>
);

export default App;
