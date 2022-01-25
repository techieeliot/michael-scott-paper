/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Space } from "antd";
import { ExclamationOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const PageNotFound: FC = () => {
  return (
    <Space
      direction="vertical"
      size="large"
      style={{ width: "100%", height: "100vh", padding: "25vh" }}
    >
      <Title>Page Not Found</Title>
      <Paragraph>
        There&apos;s nothing here
        <ExclamationOutlined />
      </Paragraph>
      <Button type="primary" shape="round" size="large">
        <Link to="/">Return Home</Link>
      </Button>
    </Space>
  );
};

export default PageNotFound;
