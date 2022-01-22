import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Divider } from "antd";

import "./index.css";

const { Footer } = Layout;

const NextButtonFooter: FC = ({ article }) => {
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

        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          size="large"
          disabled={article === undefined}
        >
          <Link to="/editor">Next</Link>
        </Button>
      </div>
    </Footer>
  );
};

export default NextButtonFooter;
