import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Typography,
  Radio,
  Row,
  Col,
  Input,
  Empty,
  Button,
} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import HeaderMenu from "./HeaderMenu";
import LayoutMenu from "./LayoutMenu";

import "./index.css";

const { SubMenu, Item } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Paragraph, Text, Title } = Typography;

const Editor: FC = () => {
  const options = [
    { label: "Header", value: "Header" },
    { label: "Column 1", value: "Column 1" },
    { label: "Column 2", value: "Column 2" },
  ];
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
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1", "sub2"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <LayoutMenu />
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Background">
              <Item key="1" style={{ height: "auto" }}>
                <Radio.Group
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "20px 0 20px 0",
                  }}
                  options={options}
                />
              </Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "24px 16.67%" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: "95%",
            }}
          >
            {/* conditionally render the text or the layout
            - set not to show right now */}
            {false && (
              <Paragraph>
                Use the panel on the right to add color and/or images to your
                background
              </Paragraph>
            )}
            {/* beginning of component for layout 1 - two-column */}
            <Layout
              className="layout"
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
                height: "100%",
              }}
            >
              <Header
                style={{ background: "#fff", height: "45%", padding: "0" }}
              >
                <Row
                  style={{
                    padding: "36px 15%",
                    height: "100%",
                  }}
                >
                  <Col
                    span={24}
                    style={{ background: "#F0F2F5", padding: "24px" }}
                  >
                    <Title>Header</Title>
                  </Col>
                </Row>
              </Header>
              <Content
                style={{
                  height: "45%",
                  background: "#fff",
                  paddingTop: "24px",
                }}
              >
                <Row
                  justify="space-between"
                  style={{ padding: "0 15%", height: "100%" }}
                >
                  <Col
                    span={11}
                    style={{ background: "#F0F2F5", padding: "24px" }}
                  >
                    <Text>Column 1</Text>
                  </Col>
                  <Col
                    span={11}
                    style={{ background: "#F0F2F5", padding: "24px" }}
                  >
                    <Text>Column 2</Text>
                  </Col>
                </Row>
              </Content>
              <Footer style={{ textAlign: "center", background: "#fff" }}>
                {" "}
                {/* placing an empty footer for later use */}
                <Row>
                  <Col />
                </Row>
              </Footer>
            </Layout>
          </Content>
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
