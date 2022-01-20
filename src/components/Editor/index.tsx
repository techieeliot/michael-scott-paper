import { FC } from "react";
import { Layout } from "antd";
import HeaderMenu from "./HeaderMenu";
import SelectionMenu from "./SelectionMenu";
import ContentLayout from "./ContentLayout";
import BackgroundMenu from "./BackgroundMenu";

import "./index.css";

const { Header, Sider } = Layout;

const Editor: FC = () => {
  return (
    <>
      <Header
        id="header"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          height: "5vh",
        }}
      >
        <HeaderMenu />
      </Header>
      <Layout id="layout" style={{ marginTop: "5vh", height: "95vh" }}>
        <Sider
          width="16.67%"
          id="left-sidebar"
          className="site-layout-background"
          style={{
            overflowY: "hidden",
            overflowX: "hidden",
            position: "fixed",
            top: "5vh",
            left: "0",
            bottom: "0",
          }}
        >
          <SelectionMenu />
        </Sider>
        <Layout id="center-content" style={{ padding: "24px 16.67%" }}>
          <ContentLayout />
        </Layout>
        <Sider
          width="16.67%"
          id="right-sidebar"
          className="site-layout-background"
          style={{
            overflowY: "hidden",
            overflowX: "hidden",
            position: "fixed",
            top: "5vh",
            right: "0",
            bottom: "0",
          }}
        >
          <BackgroundMenu />
        </Sider>
      </Layout>
    </>
  );
};

export default Editor;
