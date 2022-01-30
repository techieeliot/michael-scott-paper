import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Grid, Modal } from "antd";
import HeaderMenu from "./HeaderMenu";
import SelectionMenu from "./SelectionMenu";
import ContentViewer from "./ContentViewer";
import BackgroundMenu from "./BackgroundMenu";
import { BlackHeader, LeftSideBar, RightSideBar } from "./style";

const { useBreakpoint } = Grid;

const PageBuilder: FC = () => {
  const screens = useBreakpoint();
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleOk = (): void => {
    setIsModalVisible(false);
  };

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
      <Modal
        title="Sorry for the inconvenience."
        visible={isModalVisible}
        onOk={handleOk}
        okText={<Link to="/">Ok</Link>}
        centered
        cancelButtonProps={{ disabled: true }}
      >
        <p>Currently, the Page Builder is unavailable.</p>
        <p>Please click the button below to return to the home page</p>
        <p>Come back soon!</p>
      </Modal>
    </>
  );
};

export default PageBuilder;
