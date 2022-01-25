/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import { Layout, Row, Col, Form, Input, Space, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SelectLayoutHeader from "./SelectLayoutHeader";
import LayoutOptions from "./LayoutOptions";
import ButtonsFooter from "./ButtonsFooter";
import { RootState } from "../../store/configureStore";
import { DispatchType } from "../../type";

const { Content } = Layout;
const { Paragraph } = Typography;

const LayoutSelector: FC = () => {
  const params = useParams();
  const [title, setTitle] = useState("Untitled Page");
  const websiteData = useSelector<RootState>((state) =>
    state.rootReducer.websiteBuilder.websites.find(
      (site) => site.id === params.id
    )
  );

  useEffect(() => {
    if (websiteData) {
      // eslint-disable-next-line dot-notation
      setTitle(websiteData["title"]);
    }
    console.log(title);
  }, [title, websiteData]);

  const dispatch = useDispatch<DispatchType>();

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
          labelCol={{ span: 3 }}
          wrapperCol={{
            span: 16,
          }}
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
            label="Website Title"
            name="title"
            rules={[
              { required: true, message: "Please input your website title!" },
            ]}
          >
            <Space direction="vertical" style={{ width: "60%" }}>
              <Input
                size="large"
                defaultValue="Untitled Page"
                prefix={<UserOutlined />}
              />
            </Space>
          </Form.Item>
          <Form.Item
            label="Layout"
            name="columns"
            rules={[
              {
                required: true,
                message: "Please input your column selection!",
              },
            ]}
          >
            <LayoutOptions />
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
