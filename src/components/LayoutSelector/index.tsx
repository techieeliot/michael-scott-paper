import { FC, useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, Divider, Space, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import SelectLayoutHeader from "./SelectLayoutHeader";
import { RootState } from "../../store/configureStore";
import { DispatchType } from "../../store/typings/index";
import Information from "./Information";
import { UPDATE_WEBSITE } from "../../store/actions/actionTypes";
import { LayoutSelectorGlobalStyled, FlexBox, RadioGroup } from "./styles";
import LayoutCard, { ILayoutCard } from "./LayoutCard";
import { IWebsite } from "../../store/interfaces/IWebsite";

const { Footer } = Layout;

const LayoutSelector: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const websiteData = useSelector<RootState>((state) =>
    state.rootReducer.websiteBuilder.websites.find(
      (site) => site.id === params.id
    )
  ) as IWebsite;
  const dispatch = useDispatch<DispatchType>();
  const [layoutValue, setLayoutValue] = useState(websiteData.layout);
  const [titleValue, setTitleValue] = useState(websiteData.title);

  const handleSubmit = (id: string, siteValues: IWebsite): void => {
    const { title, layout } = siteValues;
    const updatedSiteValues = { id, title, layout };
    dispatch({
      type: UPDATE_WEBSITE,
      payload: updatedSiteValues,
    });
    navigate(`/content/${params.id}`);
  };

  const baseUrl = "https://user-images.githubusercontent.com/19453294/";
  const cards: ILayoutCard[] = [
    {
      key: 1,
      layout: "Header - Two Columns",
      alt: "one rectangle above two rectangles",
      imageUrl: `${baseUrl}149674074-5679c4d1-5c86-4e0f-832b-e139ad25d6bd.png`,
    },
    {
      key: 2,
      layout: "Header - Three Columns",
      alt: "one rectangle above three rectangles",
      imageUrl: `${baseUrl}149674073-f950522d-62ca-442d-9de9-e2731efff94b.png`,
    },
    {
      key: 3,
      layout: "Header/Footer - Two Columns",
      alt: "three rows of sections but only the middle row has two rectangles",
      imageUrl: `${baseUrl}149674075-d4493e60-d7a3-4286-9287-9819129c8c75.png`,
    },
  ];

  useEffect(() => {
    if (websiteData !== null)
      localStorage.setItem("webSiteData", JSON.stringify(websiteData));
  }, [websiteData]);

  return (
    <>
      <LayoutSelectorGlobalStyled />
      <Row style={{ textAlign: "left", height: "100vh", background: "#fff" }}>
        <Col span={24} style={{ height: "100vh" }}>
          <Form
            name="basic"
            labelCol={{ span: 3 }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{ title: titleValue, layout: layoutValue }}
            onFinish={(e) => handleSubmit(params.id, e)}
            autoComplete="off"
            style={{ width: "100%" }}
            labelWrap
          >
            <Form.Item
              id="form-item-header"
              label="header"
              style={{ width: "100%", margin: "100px auto" }}
            >
              <Row style={{ padding: "40px auto" }}>
                <Col md={{ span: 24, offset: 1 }} lg={{ span: 24, offset: 0 }}>
                  <SelectLayoutHeader />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              label="Website Title"
              name="title"
              rules={[
                { required: true, message: "Please input your website title!" },
              ]}
              style={{ width: "80%", margin: "50px 0" }}
            >
              <Row>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 2 }}>
                  {websiteData && (
                    <Input
                      size="large"
                      prefix={<UserOutlined />}
                      placeholder="Add a custom page title"
                      onChange={(e) => setTitleValue(e.target.value)}
                      value={titleValue}
                    />
                  )}
                </Col>
              </Row>
            </Form.Item>
            <Form.Item id="form-item-info" label="information">
              <Row>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 1 }}>
                  <Information />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              label="Layout"
              name="layout"
              rules={[
                {
                  required: true,
                  message: "Please input your column selection!",
                },
              ]}
            >
              <RadioGroup
                onChange={(e) => setLayoutValue(e.target.value)}
                value={layoutValue}
              >
                <Row
                  gutter={[12, 48]}
                  justify="space-between"
                  className="select-row"
                >
                  {websiteData &&
                    cards.map((card) => (
                      <LayoutCard
                        key={card.key}
                        layout={card.layout}
                        alt={card.alt}
                        imageUrl={card.imageUrl}
                      />
                    ))}
                </Row>
              </RadioGroup>
            </Form.Item>
            <Form.Item>
              <Footer
                style={{ textAlign: "right", padding: 24, background: "#fff" }}
              >
                <FlexBox direction="vertical">
                  <Divider />
                  <Space size={100} wrap>
                    <Button type="primary" shape="round" size="large">
                      <Link to="/">Home</Link>
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      shape="round"
                      size="large"
                    >
                      Next
                    </Button>
                  </Space>
                </FlexBox>
              </Footer>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LayoutSelector;
