import { FC } from "react";
import { Layout, Row, Col, Typography } from "antd";

const { Header, Content } = Layout;
const { Text, Title } = Typography;

const HeaderTwoColumnsLayout: FC = () => {
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
          justify="center"
          style={{
            height: "100%",
          }}
        >
          <Col span={24}>
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
        <Row justify="center" style={{ height: "100%" }}>
          <Col id="content-column-one-layout-one" span={12}>
            <Text>Column 1</Text>
          </Col>
          <Col id="content-column-two-layout-one" span={12}>
            <Text>Column 2</Text>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default HeaderTwoColumnsLayout;
