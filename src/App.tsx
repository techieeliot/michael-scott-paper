import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import LayoutSelector from "./components/LayoutSelector";
import PageBuilder from "./components/PageBuilder";
import Home from "./components/Home";
import "./App.css";

const App: FC = () => (
  <div className="App">
    <Layout style={{ height: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="layout" element={<LayoutSelector />} />
        <Route path="content" element={<PageBuilder />} />
      </Routes>
    </Layout>
  </div>
);

export default App;
