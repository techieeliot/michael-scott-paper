/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout, Col, Typography, Table, Button, Space, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { DispatchType } from "../../type";
import { addWebsite, removeWebsite } from "../../store/ducks/websiteBuilder";
import { IWebsite } from "../../interfaces/IWebsite";
import { RootState } from "../../store/configureStore";
import { HomeRow, LayoutRow } from "./styles";

const { Content, Header } = Layout;
const { Title } = Typography;

const Home: FC = () => {
  const websites = useSelector<RootState>(
    (state) => state.websiteBuilder.websites
  );
  const dispatch = useDispatch<DispatchType>();

  const newWebsite = {
    id: uuid(),
    layout: "Header - Two Columns",
    title: "Untitled Page",
  };

  const handleAddSite = (): object => {
    return dispatch(addWebsite(newWebsite));
  };
  // SEE ISSUE #35
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
              // onClick={handleRemoveSite(record.id)} // SEE ISSUE #35
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
    <LayoutRow style={{}}>
      <Col span={24} style={{ height: "100vh" }}>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <HomeRow>
            <Col style={{ padding: "2vh" }}>
              <Title style={{ color: "white", fontSize: "20px" }}>
                Michael Scott Paper Company
              </Title>
            </Col>
          </HomeRow>
        </Header>
        <Content style={{ width: "100%", margin: "20vh 0" }}>
          <HomeRow>
            <Col span={10}>
              <Button
                type="primary"
                size="large"
                onClick={handleAddSite}
                style={{ width: "100%" }}
              >
                <Link to="/layout">Add Website</Link>
              </Button>
            </Col>
          </HomeRow>
          <HomeRow>
            <Col span={18}>
              {/* SEE ISSUE #34 */}
              <Table columns={columns} dataSource={websites as never} />
            </Col>
          </HomeRow>
        </Content>
      </Col>
    </LayoutRow>
  );
};

export default Home;
