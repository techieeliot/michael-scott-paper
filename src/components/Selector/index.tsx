import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Row,
  Col,
  Button,
  Typography,
  Divider,
  Card,
  Form,
  Radio,
  Tooltip,
} from "antd";
import SelectorHeader from "./SelectorHeader";

import "./index.css";

const { Content, Footer } = Layout;
const { Paragraph } = Typography;
const { Meta } = Card;

const Selector: FC = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onFinish = (values: unknown) => {
    // console.log("Success:", values);
    return values; // set State later
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onFinishFailed = (errorInfo: unknown) => {
    // console.log("Failed:", errorInfo);
    return errorInfo; // set state later
  };

  // const onChange = (e: { target: { value: string } }) => {
  //   console.log("radio checked", e.target.value);
  // };
  return (
    <Row style={{ textAlign: "left", height: "100vh", background: "#fff" }}>
      <Col span={24} style={{ height: "100vh" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ width: "100%" }}
        >
          <Form.Item id="form-item-header" name="header">
            <SelectorHeader />
          </Form.Item>
          <Form.Item
            name="columns"
            rules={[
              {
                required: true,
                message: "Please input your column selection!",
              },
            ]}
          >
            <Content
              className="site-layout"
              style={{ padding: "24px 50px", background: "#fff" }}
            >
              <Radio.Group
                style={{
                  padding: "12px 24px 24px 24px",
                  margin: "0 auto",
                  minHeight: "95%",
                  width: "80%",
                }}
                // onChange={onChange}
                // value={value}
              >
                <Row
                  style={{
                    margin: "0 auto 24px auto",
                    fontSize: "initial",
                  }}
                >
                  <Col>
                    <Paragraph>
                      When choosing your layout there are several things you can
                      customize
                    </Paragraph>
                    <ul>
                      <li>
                        The background color, or you can use a large image as
                        the background
                      </li>
                      <li>
                        Each container block can contain images or custom text
                      </li>
                      <li>
                        Any text block can contain a background image or color
                      </li>
                    </ul>
                  </Col>
                </Row>

                <Row
                  gutter={[12, 48]}
                  justify="space-between"
                  style={{ margin: "5vh auto" }}
                  className="select-row"
                >
                  <Col flex="1 1 25%">
                    <Radio
                      value="Header - Two Columns"
                      className="select-column"
                      checked // removed auto checked later
                    >
                      <Card
                        style={{ width: 290 }}
                        cover={
                          <img
                            alt="example"
                            // eslint-disable-next-line max-len
                            src="https://user-images.githubusercontent.com/19453294/149674074-5679c4d1-5c86-4e0f-832b-e139ad25d6bd.png"
                          />
                        }
                      >
                        <Meta description="Header - Two Columns" />
                      </Card>
                    </Radio>
                  </Col>
                  <Col flex="1 1 25%">
                    <Tooltip title="Unavailable—check back soon!">
                      {/* remove this tooltip later */}
                      <Radio
                        value="Header - Three Columns"
                        className="select-column"
                        disabled
                      >
                        <Card
                          style={{ width: 290 }}
                          cover={
                            <img
                              alt="example"
                              // eslint-disable-next-line max-len
                              src="https://user-images.githubusercontent.com/19453294/149674073-f950522d-62ca-442d-9de9-e2731efff94b.png"
                            />
                          }
                        >
                          <Meta description="Header - Three Columns" />
                        </Card>
                      </Radio>
                    </Tooltip>
                  </Col>
                  <Col flex="1 1 25%">
                    <Tooltip title="Unavailable—check back soon!">
                      {/* remove tooltip later */}
                      <Radio
                        value="Header/Footer - Two Columns"
                        className="select-column"
                        disabled
                      >
                        <Card
                          style={{ width: 290 }}
                          cover={
                            <img
                              alt="example"
                              // eslint-disable-next-line max-len
                              src="https://user-images.githubusercontent.com/19453294/149674075-d4493e60-d7a3-4286-9287-9819129c8c75.png"
                            />
                          }
                        >
                          <Meta description="Header/Footer - Two Columns" />
                        </Card>
                      </Radio>
                    </Tooltip>
                  </Col>
                </Row>
              </Radio.Group>
            </Content>
          </Form.Item>
          <Form.Item name="footer">
            <Footer
              style={{ textAlign: "right", padding: 24, background: "#fff" }}
            >
              <div
                style={{
                  padding: "24px",
                  margin: "0 auto",
                  minHeight: "95%",
                  width: "80%",
                }}
              >
                <Divider />

                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  size="large"
                >
                  <Link to="/editor">Next</Link>
                </Button>
              </div>
            </Footer>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Selector;
