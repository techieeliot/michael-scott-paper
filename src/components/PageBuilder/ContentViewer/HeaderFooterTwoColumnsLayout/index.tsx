import { FC } from "react";
import { Layout, Row, Col, Typography } from "antd";

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

const HeaderFooterTwoColumnsLayout: FC = () => {
  // const [text, setText] = useState("hello");
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
            <Title
              editable={{
                // onChange: {()=>  },
                triggerType: ["icon", "text"],
              }}
            >
              Header
            </Title>
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
            <Text
              editable={{
                // onChange: {()=>  },
                triggerType: ["icon", "text"],
              }}
            >
              Column 1
            </Text>
          </Col>
          <Col id="content-column-two-layout-one" span={12}>
            <Text
              editable={{
                // onChange: {()=>  },
                triggerType: ["icon", "text"],
              }}
            >
              Column 2
            </Text>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center", background: "#fff" }}>
        <Row
          justify="center"
          style={{
            height: "100%",
          }}
        >
          <Col>
            <Text
              editable={{
                // onChange: {()=>  },
                triggerType: ["icon", "text"],
              }}
            >
              Footer
            </Text>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default HeaderFooterTwoColumnsLayout;
