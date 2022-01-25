/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { Layout, Row, Col, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SelectLayoutHeader from "./SelectLayoutHeader";
import LayoutOptions from "./LayoutOptions";
import ButtonsFooter from "./ButtonsFooter";

const { Content } = Layout;

const LayoutSelector: FC = () => {
  const handleSubmit = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ textAlign: "left", height: "100vh", background: "#fff" }}>
      <Col span={24} style={{ height: "100vh" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ width: "100%" }}
        >
          <Form.Item id="form-item-header" name="header">
            <SelectLayoutHeader />
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              { required: true, message: "Please input your website title!" },
            ]}
          >
            <Content
              className="site-layout"
              style={{ padding: "24px 50px", background: "#fff" }}
            >
              <Input
                size="large"
                placeholder="Enter a website title"
                prefix={<UserOutlined />}
              />
            </Content>
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
              <LayoutOptions />
            </Content>
          </Form.Item>
          <Form.Item name="footer">
            <ButtonsFooter />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LayoutSelector;
