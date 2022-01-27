import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Layout } from "antd";
import LayoutSelector from "./components/LayoutSelector";
import PageBuilder from "./components/PageBuilder";
import Home from "./components/Home";
import "./App.css";
import PageNotFound from "./components/PageNotFound";
import store from "./store/configureStore";

const App: FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Layout className="App" style={{ height: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="layout/:id" element={<LayoutSelector />} />
          <Route path="content/:id" element={<PageBuilder />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Provider>
  </BrowserRouter>
);

export default App;
