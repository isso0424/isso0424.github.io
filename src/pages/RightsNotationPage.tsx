import React from "react";
import "./LicensePage.scss";

const rights = [
  {
    target: "React-logo",
    text: "Non-commercial Use",
  },
  {
    target: "css-logo.svg",
    text: "Ⓒ daPhyre 2013\n https://creativecommons.org/licenses/by/3.0/",
  },
  {
    target: "SASS logo",
    text:
      "© 2006–2020 the Sass team, and numerous contributors.\nhttps://creativecommons.org/licenses/by-nc-sa/3.0/deed",
  },
  {
    target: "HTML logo",
    text: "https://creativecommons.org/licenses/by/3.0/",
  },
  {
    target: "AndroidRobot",
    text:
      "Android ロボットは、Google が作成および提供している作品から複製または変更したものであり、クリエイティブ・コモンズ表示 3.0 ライセンスに記載された条件に従って使用しています。  https://creativecommons.org/licenses/by/3.0/",
  },
  {
    target: "Golang logo",
    text: "https://creativecommons.org/licenses/by/3.0",
  },
  {
    target: "TypeScript logo",
    text:
      "Copyright (c) 2015 Remo H. Jansen \nReleased under the MIT license\nhttps://github.com/remojansen/logo.ts/blob/master/LICENSE",
  },
  {
    target: "Python logo",
    text:
      "https://www.python.org/psf/trademarks/\n https://creativecommons.org/publicdomain/zero/1.0/",
  },
];

export const RightsNotationPage: React.FC = () => (
  <>
    <div className="license-page">
      {rights.map((license) => (
        <div key={license.target}>
          <h4>{license.target}</h4>
          <p className="license-text">{license.text}</p>
        </div>
      ))}
    </div>
  </>
);
