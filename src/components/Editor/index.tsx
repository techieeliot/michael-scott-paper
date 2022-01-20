import { FC } from "react";
import { Layout, Menu, Typography, Row, Col, Input, Empty, Button } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import HeaderMenu from "./HeaderMenu";
import SelectionMenu from "./SelectionMenu";
import ContentLayout from "./ContentLayout";

import "./index.css";

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

const Editor: FC = () => {
  return (
    <>
      <Header
        className="header"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          height: "5vh",
        }}
      >
        <HeaderMenu />
      </Header>
      <Layout style={{ marginTop: "5vh", height: "95vh" }}>
        <Sider
          width="16.67%"
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
        <Layout style={{ padding: "24px 16.67%" }}>
          <ContentLayout />
        </Layout>
        <Sider
          width="16.67%"
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
          <Menu
            mode="inline"
            // defaultSelectedKeys={['1']}
            defaultOpenKeys={["sub3", "sub4"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub3"
              icon={<UserOutlined />}
              title="Background Color"
            >
              <Menu.Item key="1">
                <Input
                  placeholder="input colors"
                  addonBefore={<div>hex #</div>}
                  addonAfter={<div />}
                />
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<LaptopOutlined />}
              title="Background Image"
            >
              <Menu.Item key="2" style={{ height: "auto" }}>
                <Button
                  type="link"
                  style={{
                    height: "fit-content",
                    width: "fit-content",
                    background: "#fafafa",
                    border: "1px dashed #d9d9d9",
                  }}
                >
                  <Empty
                    image={<PictureOutlined style={{ fontSize: "75px" }} />}
                    description="select image"
                    imageStyle={{
                      height: 60,
                    }}
                  />
                </Button>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    </>
  );
};

export default Editor;
