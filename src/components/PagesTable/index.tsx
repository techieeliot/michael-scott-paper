/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Typography, Table, Button, Space } from "antd";

import "./index.css";

const { Content, Header } = Layout;
const { Title } = Typography;

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (
      text: string
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
    ) => <a>{text}</a>,
  },
  {
    title: "Layout",
    dataIndex: "layout",
    key: "layout",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const websites = [
  {
    id: 1,
    layout: "Header - Two Columns",
    title: "Untitled Page",
  },
  {
    id: 2,
    layout: "Header - Three Columns",
    title: "Michael",
  },
];

const PagesTable: FC = () => {
  return (
    <Row style={{ textAlign: "left", height: "100vh", background: "#fff" }}>
      <Col span={24} style={{ height: "100vh" }}>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <Row justify="center" style={{ width: "100%" }}>
            <Col style={{ padding: "2vh" }}>
              <Title style={{ color: "white", fontSize: "20px" }}>
                Michael Scott Paper Company
              </Title>
            </Col>
          </Row>
        </Header>
        <Content style={{ width: "100%", margin: "20vh 0" }}>
          <Row justify="center" style={{ width: "100%" }}>
            <Col span={10}>
              <Link to="/layout">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  style={{ width: "100%" }}
                >
                  Add Website
                </Button>
              </Link>
            </Col>
          </Row>
          <Row justify="center" style={{ width: "100%", margin: "20vh 0" }}>
            <Col span={18}>
              <Table columns={columns} dataSource={websites} />
            </Col>
          </Row>
        </Content>
      </Col>
    </Row>
  );
};

export default PagesTable;
