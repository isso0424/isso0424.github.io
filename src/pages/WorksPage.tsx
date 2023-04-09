import React from "react";
// eslint-disable-next-line
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Work } from "../components/Work";
import "./WorksPage.scss";

const contestsWorks = [
  {
    title: "Rocat",
    text: "STEM educational material for junior high school students. It constitutes from 3 components, visual programming tool, graph drawing tool and water rocket. Adopted in MitouJunior",
  },
  {
    title: "Advanced Blackboard",
    text: "New black board WEB application with AR. You can register documents(images) and draw it with scanning AR-Marker. Developed in OpenHackU2020 vol.1.",
  },
  {
    title: "Electricity Collection",
    text: "2D action game to aim for the goal. You can get dirty (ex: Fire-power) and cleanly(ex: Wind-power) electricity. And, you have to build route with electricity and keep balance dirty electricity and cleanly electricity. Developed in Thailand-Japan Game Programming Hackathon 2020 Final round.",
  },
  {
    title: "Elderly Home",
    text: "Smart speeker to watch over senior citizens. They can manipulate with their voice. If they don't talk with this speeker, it send 'need to check alive' notice for administrator. Developed in Web X IoT Hackathon in Ibaraki.",
  },
];

const personalWorks = [
  {
    title: "Pucis",
    text: "Smart phone application for recording number of missed hours. It can calculate required hours and notify warning of missed hours",
  },
  {
    title: "IoT Magic Cane",
    text: "IoT device for controll switch bot. You can controll switch bot with motion.",
  },
  {
    title: "Spoedit",
    text: "Playlist editor for spotify. You can search musics, add it to playlist and delete musics from playlist.",
  },
  {
    title: "CLI Spotify",
    text: "Spotify client for CLI in Linux. This client can record playlists and controll player.",
  },
];

export const WorksPage: React.FC = () => {
  const [state, setState] = React.useState({ currentTab: 0 });
  return (
    <div className="page">
      <h1>Works</h1>
      <Tabs
        onSelect={(index) => setState({ currentTab: index })}
        selectedIndex={state.currentTab}
      >
        <TabList className="tabList">
          <Tab className={state.currentTab === 0 ? "selectedTab" : "tab"}>
            Contests
          </Tab>
          <Tab className={state.currentTab === 1 ? "selectedTab" : "tab"}>
            Personal
          </Tab>
        </TabList>
        <TabPanel>
          <div className="works">
            {contestsWorks.map((work) => (
              <Work key={work.title} title={work.title} text={work.text} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="works">
            {personalWorks.map((work) => (
              <Work key={work.title} title={work.title} text={work.text} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
