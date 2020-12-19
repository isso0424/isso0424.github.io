import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import { TopPage } from "./pages/TopPage";
import { Header } from "./components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="App-main">{children}</div>
    </>
  );
};

const App: React.FC = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={TopPage} />
    </Layout>
  </Router>
);

export default App;
