import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import LayoutSelector from "./components/LayoutSelector";
import PageBuilder from "./components/PageBuilder";
import Home from "./components/Home";
import "./App.css";
import PageNotFound from "./components/PageNotFound";

const App: FC = () => (
  <div className="App">
    <Layout style={{ height: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="layout/:id" element={<LayoutSelector />} />
        <Route path="content/:id" element={<PageBuilder />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  </div>
);

export default App;
