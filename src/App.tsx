import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import LayoutChoices from "./components/LayoutChoices";
import ContentBuilder from "./components/ContentBuilder";

import "./App.css";

const App: FC = () => (
  <div className="App">
    <Layout style={{ height: "100%" }}>
      <Routes>
        <Route path="/" element={<LayoutChoices />} />
        <Route path="editor" element={<ContentBuilder />} />
      </Routes>
    </Layout>
  </div>
);

export default App;
