import React from "react";
import { Work } from "../components/Work";
import "./WorksPage.scss";

const works = [
  {
    title: "Rocat",
    text:
      "It is STEM educational material for junior high school students. It constitutes from 3 components, visual programming tool, graph drawing tool and water rocket. Adopted in MitouJunior",
  },
  {
    title: "AdvancedBlackboard",
    text:
      "It is new black board WEB application with AR. You can register documents(images) and draw it with scanning AR-Marker. Developed in OpenHackU2020 vol.1.",
  },
  {
    title: "ElectricityCollection",
    text:
      "It is 2D action game to aim for the goal. You can get dirty (ex: Fire-power) and cleanly(ex: Wind-power) electricity. And, you have to build route with electricity and keep balance dirty electricity and cleanly electricity. Developed in Thailand-Japan Game Programming Hackathon 2020 Final round.",
  },
  {
    title: "ElderlyHome",
    text:
      "It is smart speeker to watch over senior citizens. They can manipulate with their voice. If they don't talk with this speeker, it send 'need to check alive' notice for administrator. Developed in Web X IoT Hackathon in Ibaraki.",
  },
  {
    title: "Pucis",
    text:
      "It is smart phone application for recording number of missed hours. It can calculate required hours and notify warning of missed hours",
  },
  {
    title: "IoTMagicCane",
    text:
      "It is IoT device for controll switch bot. You can controll switch bot with motion.",
  },
];

export const WorksPage: React.FC = () => (
  <div className="page">
    <h1>Works</h1>
    <div className="works">
      {works.map((work) => (
        <Work title={work.title} text={work.text} />
      ))}
    </div>
  </div>
);
