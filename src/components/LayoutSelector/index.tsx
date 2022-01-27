import { FC, useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, Divider, Space, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import SelectLayoutHeader from "./SelectLayoutHeader";
import { RootState } from "../../store/configureStore";
import { DispatchType } from "../../store/typings/index";
import Information from "./Information";
import { UPDATE_WEBSITE } from "../../store/actions/actionTypes";
import { LayoutSelectorGlobalStyled, FlexBox, RadioGroup } from "./styles";
import LayoutCard, { ILayoutCard } from "./LayoutCard";

const { Footer } = Layout;

const LayoutSelector: FC = () => {
  const params = useParams();
  const websiteData = useSelector<RootState>((state) =>
    state.rootReducer.websiteBuilder.websites.find(
      (site: { id: string }) => site.id === params.id
    )
  );
  const dispatch = useDispatch<DispatchType>();
  const [layoutValue, setLayoutValue] = useState(1);

  const handleChange = (e: { target: { value: string } }): void => {
    console.log("radio checked", e.target.value);
    setLayoutValue(parseInt(e.target.value, 10));
  };

  const handleSubmit = (siteValues: unknown): void => {
    console.log("Success:", siteValues);

    dispatch({
      type: UPDATE_WEBSITE,
      website: siteValues,
    });
    <Navigate to={`/content/${params.id}`} />;
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleFailure = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
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
    console.log(websiteData);
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
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            onFinishFailed={handleFailure}
            autoComplete="off"
            style={{ width: "100%" }}
          >
            <Form.Item
              id="form-item-header"
              label="header"
              style={{ width: "100%" }}
            >
              <SelectLayoutHeader />
            </Form.Item>
            <Form.Item
              label="Website Title"
              name="title"
              rules={[
                { required: true, message: "Please input your website title!" },
              ]}
            >
              {websiteData && (
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Add a custom page title"
                />
              )}
            </Form.Item>
            <Form.Item id="form-item-info" label="information">
              <Information />
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
              <RadioGroup onChange={() => handleChange} value={layoutValue}>
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
                  <Space size={100}>
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
