import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route } from "react-router";
import { TopPage } from "./pages/TopPage";
import { Header } from "./components/Header";
import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { RightsNotationPage } from "./pages/RightsNotationPage";
import { WorksPage } from "./pages/WorksPage";
import { ContactPage } from "./pages/ContactPage";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="App-main">
        {children}
        <p>
          <Link to="/rights" style={{ color: "#fff" }}>
            rights notation
          </Link>
        </p>
      </div>
    </>
  );
};

const App: React.FC = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={TopPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/skills" component={SkillsPage} />
      <Route path="/rights" component={RightsNotationPage} />
      <Route path="/works" component={WorksPage} />
      <Route path="/contact" component={ContactPage} />
    </Layout>
  </Router>
);

export default App;
