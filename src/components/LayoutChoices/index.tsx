import { FC, useState, FormEvent } from "react";
import { Layout, Row, Col, Form } from "antd";
import SelectLayoutHeader from "./SelectLayoutHeader";
import LayoutSelection from "./LayoutSelection";
import NextButtonFooter from "./NextButtonFooter";

import "./index.css";

const { Content } = Layout;

type Props = {
  saveWebsite: (website: Website | any) => void;
};

const LayoutChoices: FC<Props> = ({ saveWebsite }) => {
  const [website, setWebsite] = useState<Website | {}>();

  const handleWebsiteData = (e: FormEvent<HTMLInputElement>) => {
    setWebsite({
      ...website,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewWebsite = (e: FormEvent) => {
    e.preventDefault();
    saveWebsite(website);
  };

  return (
    <Row style={{ textAlign: "left", height: "100vh", background: "#fff" }}>
      <Col span={24} style={{ height: "100vh" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={addNewWebsite}
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
              <LayoutSelection handleWebsiteData={handleWebsiteData} />
            </Content>
          </Form.Item>
          <Form.Item name="footer">
            <NextButtonFooter website={website} />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LayoutChoices;
