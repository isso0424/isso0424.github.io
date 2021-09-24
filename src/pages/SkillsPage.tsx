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
      },
      {
        name: "CSS",
        imageURL: CSSIcon,
      },
      {
        name: "SASS",
        imageURL: SASSIcon,
      },
      {
        name: "HTML",
        imageURL: HTMLIcon,
      },
      {
        name: "Electron",
        imageURL: ElectronIcon,
      },
    ],
  },
  {
    category: "BackEnd",
    skills: [
      {
        name: "Node.js",
        imageURL: NodeJSIcon,
      },
      {
        name: "Django",
        imageURL: DjangIcon,
      },
      {
        name: "MySQL",
      },
    ],
  },
  {
    category: "Mobile",
    skills: [
      {
        name: "Android™Native",
        imageURL: AndroidRobotIcon,
      },
      {
        name: "Flutter™",
        imageURL: FlutterIcon,
      },
    ],
  },
  {
    category: "ProgrammingLanguages",
    skills: [
      {
        name: "Golang",
        imageURL: GolangIcon,
      },
      {
        name: "TypeScript",
        imageURL: TypeScriptIcon,
      },
      {
        name: "Python",
        imageURL: PythonIcon,
      },
      {
        name: "Rust",
        imageURL: RustIcon,
      },
      {
        name: "Dart™",
        imageURL: DartIcon,
      },
      {
        name: "Kotlin",
        imageURL: KotlinIcon,
      },
    ],
  },
  {
    category: "Others",
    skills: [
      {
        name: "Markdown",
        imageURL: MarkdownIcon,
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
