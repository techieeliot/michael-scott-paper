import { FC } from "react";
import { Layout, Row, Col, Form } from "antd";
import SelectorHeader from "./SelectorHeader";
import CardsRadioGroup from "./CardsRadioGroup";
import SelectorFooter from "./SelectorFooter";

import "./index.css";

const { Content } = Layout;

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
              <CardsRadioGroup />
            </Content>
          </Form.Item>
          <Form.Item name="footer">
            <SelectorFooter />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Selector;
