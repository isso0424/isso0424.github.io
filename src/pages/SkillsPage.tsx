import React from "react";
import { SkillsFrame } from "../components/SkillsFrame";
import { SkillCategory } from "../type/skill";

import ReactIcon from "../static/react-icon.webp";
import NodeJSIcon from "../static/nodejs-icon.svg";
import DjangIcon from "../static/django-icon.svg";
import GolangIcon from "../static/Go-Logo_LightBlue.svg";
import TypeScriptIcon from "../static/ts-logo-256.svg";
import PythonIcon from "../static/python-logo.svg";
import RustIcon from "../static/rust-logo.webp";
import DartIcon from "../static/dart-logo.svg";
import KotlinIcon from "../static/kotlin-logo.webp";
import HTMLIcon from "../static/html-logo.svg";
import MarkdownIcon from "../static/markdown-logo.svg";
import CSSIcon from "../static/css-logo.svg";
import SASSIcon from "../static/sass-logo.webp";
import AndroidRobotIcon from "../static/android-robot.svg";
import FlutterIcon from "../static/flutter-logo.svg";
import ElectronIcon from "../static/electron-logo.svg";

import "./SkillsPage.scss";

const skills: Array<SkillCategory> = [
  {
    category: "FrontEnd",
    skills: [
      {
        name: "React",
        imageURL: ReactIcon,
        width: 100,
        height: 100,
      },
      {
        name: "CSS",
        imageURL: CSSIcon,
        width: 387,
        height: 546,
      },
      {
        name: "SASS",
        imageURL: SASSIcon,
        width: 133,
        height: 100,
      },
      {
        name: "HTML",
        imageURL: HTMLIcon,
        width: 512,
        height: 512,
      },
      {
        name: "Electron",
        imageURL: ElectronIcon,
        width: 256,
        height: 256,
      },
    ],
  },
  {
    category: "BackEnd",
    skills: [
      {
        name: "Node.js",
        imageURL: NodeJSIcon,
        width: 2270,
        height: 2500,
      },
      {
        name: "Django",
        imageURL: DjangIcon,
        width: 32,
        height: 32,
      },
      {
        name: "MySQL",
        width: 0,
        height: 0,
      },
    ],
  },
  {
    category: "Mobile",
    skills: [
      {
        name: "Android™Native",
        imageURL: AndroidRobotIcon,
        width: 1274,
        height: 718,
      },
      {
        name: "Flutter™",
        imageURL: FlutterIcon,
        width: 842,
        height: 1043,
      },
    ],
  },
  {
    category: "ProgrammingLanguages",
    skills: [
      {
        name: "Golang",
        imageURL: GolangIcon,
        width: 255,
        height: 255,
      },
      {
        name: "TypeScript",
        imageURL: TypeScriptIcon,
        width: 256,
        height: 256,
      },
      {
        name: "Python",
        imageURL: PythonIcon,
        width: 500,
        height: 650,
      },
      {
        name: "Rust",
        imageURL: RustIcon,
        width: 134,
        height: 100,
      },
      {
        name: "Dart™",
        imageURL: DartIcon,
        width: 1080,
        height: 1080,
      },
      {
        name: "Kotlin",
        imageURL: KotlinIcon,
        width: 100,
        height: 100,
      },
    ],
  },
  {
    category: "Others",
    skills: [
      {
        name: "Markdown",
        imageURL: MarkdownIcon,
        width: 208,
        height: 100,
      },
    ],
  },
];

const flutterLicense =
  "Flutter and the related logo are trademarks of Google LLC. We are not endorsed by or affiliated with Google LLC.";
const dartLicense =
  "Dart and the related logo are trademarks of Google LLC. We are not endorsed by or affiliated with Google LLC.";
export const SkillsPage: React.FC = () => (
  <>
    <div className="page">
      <h1>Skills</h1>
      <div className="main">
        {skills.map((category) => (
          <SkillsFrame category={category.category} skills={category.skills} />
        ))}
      </div>
      <p className="credit">{flutterLicense}</p>
      <p className="credit">{dartLicense}</p>
    </div>
  </>
);
