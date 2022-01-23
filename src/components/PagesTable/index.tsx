/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Row,
  Col,
  Typography,
  Table,
  Button,
  Space,
  Tooltip,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, WebsiteState } from "../../type";
import { addWebsite, removeWebsite } from "../../store/ducks/websiteBuilder";
import "./index.css";
import { IWebsite } from "../../interfaces/IWebsite";

const { Content, Header } = Layout;
const { Title } = Typography;

const PagesTable: FC = () => {
  const websites = useSelector<WebsiteState>((state) => state.websites);
  const dispatch = useDispatch<DispatchType>();

  const newWebsite = {
    id: 1,
    layout: "Header - Two Columns",
    title: "Untitled Page",
  };

  const handleAddSite = (): object => {
    return dispatch(addWebsite(newWebsite));
  };
  // const handleRemoveSite = (website: IWebsite): object => {
  //   return dispatch(removeWebsite(website));
  // };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string) => (
        <Button type="link" size="small">
          {text}
        </Button>
      ),
    },
    {
      title: "Layout",
      dataIndex: "layout",
      key: "layout",
    },
    {
      title: "Action",
      key: "action",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: (_text: unknown, record: { id: IWebsite }) => (
        <Space size="middle">
          <Tooltip title="Currently unavailable">
            <Button
              type="link"
              size="small"
              // onClick={handleRemoveSite(record.id)}
              disabled
            >
              Delete
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

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
                  size="large"
                  onClick={handleAddSite}
                  style={{ width: "100%" }}
                >
                  Add Website
                </Button>
              </Link>
            </Col>
          </Row>
          <Row justify="center" style={{ width: "100%", margin: "20vh 0" }}>
            <Col span={18}>
              <Table columns={columns} dataSource={websites as never} />
            </Col>
          </Row>
        </Content>
      </Col>
    </Row>
  );
};

export default PagesTable;
