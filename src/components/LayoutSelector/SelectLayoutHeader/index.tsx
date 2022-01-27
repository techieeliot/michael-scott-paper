import { FC } from "react";
import { Col, Layout, Row, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const SelectLayoutHeader: FC = () => {
  return (
    <Header id="selection-header" style={{ width: "100%", background: "#fff" }}>
      <Row
        gutter={[12, 48]}
        justify="space-between"
        style={{
          fontSize: "initial",
        }}
      >
        <Col style={{ width: "100%", background: "#fff" }}>
          <Title>
            Add a custom title and select a layout for your single page website
          </Title>
        </Col>
      </Row>
    </Header>
  );
};

export default SelectLayoutHeader;
