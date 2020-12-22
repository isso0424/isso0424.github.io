import React from "react";
import { SkillsFrame } from "../components/SkillsFrame";
import { SkillCategory } from "../type/skill";
import ReactIcon from "../static/react-icon.png";
import NodeJSIcon from "../static/nodejs-icon.svg";
import DjangIcon from "../static/django-icon.svg";
import GolangIcon from "../static/Go-Logo_LightBlue.svg";
import TypeScriptIcon from "../static/ts-logo-256.svg";
import PythonIcon from "../static/python-logo.png";
import RustIcon from "../static/rust-logo.png";
import DartIcon from "../static/dart-logo.svg";
import KotlinIcon from "../static/kotlin-logo.svg";
import HTMLIcon from "../static/html-logo.svg";
import MarkdownIcon from "../static/markdown-logo.svg";
import CSSIcon from "../static/css-logo.png";
import SASSIcon from "../static/sass-logo.png";
import AndroidRobotIcon from "../static/android-robot.svg";
import FlutterIcon from "../static/flutter-logo.svg";
import MySQLIcon from "../static/mysql-logo.png";
import ElectronIcon from "../static/electron-logo.svg";

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
        imageURL: MySQLIcon,
      },
    ],
  },
  {
    category: "Mobile",
    skills: [
      {
        name: "AndroidNative",
        imageURL: AndroidRobotIcon,
      },
      {
        name: "Flutter",
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
        name: "Dart",
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

export const SkillsPage: React.FC = () => (
  <>
    <h1>Skills</h1>
    {skills.map((category) => (
      <SkillsFrame category={category.category} skills={category.skills} />
    ))}
  </>
);
