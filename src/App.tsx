import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import { TopPage } from "./pages/TopPage";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  return <>{children}</>;
};

const App: React.FC = () => (
  <div className="App-main">
    <Router>
      <Layout>
        <Route exact path="/" component={TopPage} />
      </Layout>
    </Router>
  </div>
);

export default App;
