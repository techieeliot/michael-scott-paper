import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Col,
  Typography,
  Table,
  Button,
  Space,
  Popconfirm,
  message,
  Tooltip,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { DispatchType } from "../../store/typings";
import { IWebsite } from "../../store/interfaces/IWebsite";
import { RootState } from "../../store/configureStore";
import { HomeRow, LayoutRow, TableRow } from "./styles";
import { ADD_WEBSITE, REMOVE_WEBSITE } from "../../store/actions/actionTypes";

const { Content, Header } = Layout;
const { Title, Paragraph } = Typography;

const Home: FC = () => {
  const websites = useSelector<RootState>(
    (state) => state.rootReducer.websiteBuilder.websites
  );
  const dispatch = useDispatch<DispatchType>();

  const handleAddSite = (): object => {
    const newWebsite = {
      id: uuid(),
      layout: "",
      title: "",
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

  const handleConfirm = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    website: IWebsite
  ): void => {
    handleRemoveSite(event, website);
    message.success(`${website.title || "Untitled Page"} deleted successfully`);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ellipsis: {
        showTitle: false,
      },
      render: (text: string, record: IWebsite) => (
        <Tooltip placement="topLeft" title={text || "Untitled Page"}>
          <Button type="link" size="small">
            {text || record.layout ? (
              <Link to={`/content/${record.id}`}>{text}</Link>
            ) : (
              <Link to={`/layout/${record.id}`}>{text || "Untitled Page"}</Link>
            )}
          </Button>
        </Tooltip>
      ),
    },
    {
      title: "Layout",
      dataIndex: "layout",
      key: "layout",
      ellipsis: true,
      render: (text: string, record: IWebsite) => (
        <Space>
          {record.layout ? (
            <Tooltip placement="topLeft" title={text}>
              {text}
            </Tooltip>
          ) : (
            <Tooltip placement="topLeft" title="Choose Layout">
              <Button type="link" size="small">
                <Link to={`/layout/${record.id}`}>Choose Layout</Link>
              </Button>
            </Tooltip>
          )}
        </Space>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      ellipsis: true,
      render: (_text: unknown, record: IWebsite) => (
        <Space size="middle" direction="vertical">
          {record.layout ? (
            <Tooltip placement="topLeft" title="Change Layout">
              <Button type="link" size="small">
                <Link to={`/layout/${record.id}`}>Change Layout</Link>
              </Button>
            </Tooltip>
          ) : (
            ""
          )}
          <Popconfirm
            placement="right"
            title={`Are you sure to delete ${record.title || "Untitled Page"}?`}
            onConfirm={(e) => handleConfirm(e, record)}
            onCancel={() =>
              message.error(
                `${record.title || "Untitled Page"} will not be deleted`
              )
            }
            okText="Yes"
            cancelText="No"
          >
            <Tooltip placement="topLeft" title="Change Layout">
              <Button type="link" size="small">
                Delete
              </Button>
            </Tooltip>
          </Popconfirm>
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
              <Table columns={columns} dataSource={websites as []} />
            </Col>
          </TableRow>
        </Content>
      </Col>
    </LayoutRow>
  );
};

export default Home;
