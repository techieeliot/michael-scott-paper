import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout, Col, Typography, Table, Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { DispatchType } from "../../store/typings";
import { IWebsite } from "../../store/interfaces/IWebsite";
import { RootState } from "../../store/configureStore";
import { HomeRow, LayoutRow, TableRow } from "./styles";
import { ADD_WEBSITE, REMOVE_WEBSITE } from "../../store/actions/actionTypes";

const { Content, Header } = Layout;
const { Title } = Typography;

const Home: FC = () => {
  const websites = useSelector<RootState>(
    (state) => state.rootReducer.websiteBuilder.websites
  );
  const dispatch = useDispatch<DispatchType>();

  const handleAddSite = (): object => {
    const newWebsite = {
      id: uuid(),
      layout: "Header - Two Columns",
      title: "Untitled Page",
    };
    return dispatch({
      type: ADD_WEBSITE,
      payload: newWebsite,
    });
  };
  const handleRemoveSite = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    website: IWebsite
  ): object => {
    event.preventDefault();
    return dispatch({
      type: REMOVE_WEBSITE,
      payload: website,
    });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ellipsis: true,
      render: (text: string, record: IWebsite) => (
        <Button type="link" size="small">
          {text === "Untitled Page" ? (
            <Link to={`/layout/${record.id}`}>{text}</Link>
          ) : (
            <Link to={`/content/${record.id}`}>{text}</Link>
          )}
        </Button>
      ),
    },
    {
      title: "Layout",
      dataIndex: "layout",
      key: "layout",
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_text: unknown, record: IWebsite) => (
        <Space size="middle" direction="vertical">
          <Button type="link" size="small">
            <Link to={`/layout/${record.id}`}>Layout</Link>
          </Button>
          <Button
            type="link"
            size="small"
            onClick={(e) => handleRemoveSite(e, record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <LayoutRow>
      <Col span={24} style={{ height: "100vh" }}>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <HomeRow justify="center">
            <Col style={{ padding: "2vh" }}>
              <Title style={{ color: "white", fontSize: "20px" }}>
                Michael Scott Paper Company
              </Title>
            </Col>
          </HomeRow>
        </Header>
        <Content style={{ width: "100%", margin: "20vh 0" }}>
          <HomeRow justify="center">
            <Col xs={20} sm={18} md={12} lg={10}>
              <Button
                type="primary"
                size="large"
                onClick={handleAddSite}
                style={{ width: "100%" }}
              >
                Add Website
              </Button>
            </Col>
          </HomeRow>
          <TableRow justify="center">
            <Col xs={20} sm={18} md={12} lg={10}>
              {/* SEE ISSUE #34 */}
              <Table columns={columns} dataSource={websites as never} />
            </Col>
          </TableRow>
        </Content>
      </Col>
    </LayoutRow>
  );
};

export default Home;
