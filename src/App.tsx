import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import LayoutChoices from "./components/LayoutChoices";
import ContentBuilder from "./components/ContentBuilder";
import PagesTable from "./components/PagesTable";

import "./App.css";

const App: FC = () => (
  <div className="App">
    <Layout style={{ height: "100%" }}>
      <Routes>
        <Route path="/" element={<PagesTable />} />
        <Route path="layout" element={<LayoutChoices />} />
        <Route path="content" element={<ContentBuilder />} />
      </Routes>
    </Layout>
  </div>
);

export default App;
