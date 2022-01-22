import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Divider, Space } from "antd";

import "./index.css";

const { Footer } = Layout;

const ButtonsFooter: FC = () => {
  return (
    <Footer style={{ textAlign: "right", padding: 24, background: "#fff" }}>
      <div
        style={{
          padding: "24px",
          margin: "0 auto",
          minHeight: "95%",
          width: "80%",
        }}
      >
        <Divider />
        <Space size={100}>
          <Button type="primary" shape="round" size="large">
            <Link to="/">Return Home</Link>
          </Button>
          <Button type="primary" htmlType="submit" shape="round" size="large">
            <Link to="/content">Next</Link>
          </Button>
        </Space>
      </div>
    </Footer>
  );
};

export default ButtonsFooter;
