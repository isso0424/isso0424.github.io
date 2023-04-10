import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import { TopPage } from "./pages/TopPage";
import { Header } from "./components/Header";
import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { RightsNotationPage } from "./pages/RightsNotationPage";
import { WorksPage } from "./pages/WorksPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFound";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="root">
      <Header />
      <div className="app-main">
        {children}
        <p>
          <Link to="/rights" style={{ color: "#fff" }}>
            rights notation
          </Link>
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/rights" element={<RightsNotationPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
