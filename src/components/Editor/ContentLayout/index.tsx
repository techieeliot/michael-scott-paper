import { FC } from "react";
import { Layout, Row, Col, Typography } from "antd";

import "./index.css";

const { Header, Content, Footer } = Layout;
const { Paragraph, Text, Title } = Typography;
const ContentLayout: FC = () => {
  return (
    <Content
      id="content-layout"
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
        <Paragraph id="empty-content">
          Use the panel on the right to add color and/or images to your
          background
        </Paragraph>
      )}
      {/* beginning of component for layout 1 - two-column */}
      <Layout
        className="two-column-layout-layout-one"
        style={{
          position: "relative",
          display: "inline-block",
          width: "100%",
          height: "100%",
        }}
      >
        <Header
          id="content-header-layout-one"
          style={{ background: "#fff", height: "45%", padding: "0" }}
        >
          <Row
            style={{
              padding: "36px 15%",
              height: "100%",
            }}
          >
            <Col span={24} style={{ background: "#F0F2F5", padding: "24px" }}>
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
              id="content-column-one-layout-one"
              span={11}
              style={{ background: "#F0F2F5", padding: "24px" }}
            >
              <Text>Column 1</Text>
            </Col>
            <Col
              id="content-column-two-layout-one"
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
  );
};

export default ContentLayout;
