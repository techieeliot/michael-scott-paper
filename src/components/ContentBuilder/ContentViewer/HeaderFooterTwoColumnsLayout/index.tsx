import { FC } from "react";
import { Layout, Row, Col, Typography } from "antd";

import "./index.css";

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

const HeaderFooterTwoColumnsLayout: FC = () => {
  return (
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
        <Row>
          <Col>Footer</Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default HeaderFooterTwoColumnsLayout;
