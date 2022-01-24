import { FC } from "react";
import { Layout, Row, Col, Form } from "antd";
import SelectLayoutHeader from "./SelectLayoutHeader";
import LayoutSelection from "./LayoutSelection";
import ButtonsFooter from "./ButtonsFooter";

const { Content } = Layout;

const LayoutChoices: FC = () => {
  return (
    <Row style={{ textAlign: "left", height: "100vh", background: "#fff" }}>
      <Col span={24} style={{ height: "100vh" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          // onFinish={}
          autoComplete="off"
          style={{ width: "100%" }}
        >
          <Form.Item id="form-item-header" name="header">
            <SelectLayoutHeader />
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
              <LayoutSelection />
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

export default LayoutChoices;
