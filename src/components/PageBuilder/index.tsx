import { FC } from "react";
import { Layout, Grid } from "antd";
import HeaderMenu from "./HeaderMenu";
import SelectionMenu from "./SelectionMenu";
import ContentViewer from "./ContentViewer";
import BackgroundMenu from "./BackgroundMenu";
import { BlackHeader, LeftSideBar, RightSideBar } from "./style";

const { useBreakpoint } = Grid;

const PageBuilder: FC = () => {
  const screens = useBreakpoint();

  return (
    <>
      <BlackHeader id="header">
        <HeaderMenu />
      </BlackHeader>
      <Layout id="layout" style={{ margin: "5vh 5px 0 5px", height: "95vh" }}>
        <LeftSideBar
          width="16.67%"
          id="left-sidebar"
          className="site-layout-background"
          breakpoint="lg"
          collapsible={screens.lg}
          collapsedWidth={40}
        >
          <SelectionMenu />
        </LeftSideBar>
        <Layout id="center-content" style={{ padding: "24px 16.67%" }}>
          <ContentViewer />
        </Layout>
        <RightSideBar
          width="16.67%"
          id="right-sidebar"
          className="site-layout-background"
          breakpoint="lg"
          collapsible={screens.lg}
          collapsedWidth={40}
          reverseArrow
        >
          <BackgroundMenu />
        </RightSideBar>
      </Layout>
    </>
  );
};

export default PageBuilder;
