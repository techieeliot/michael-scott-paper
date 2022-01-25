import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout, Button, Divider, Space } from "antd";
import FlexBox from "./styles";

const { Footer } = Layout;

const ButtonsFooter: FC = () => {
  const params = useParams();
  return (
    <Footer style={{ textAlign: "right", padding: 24, background: "#fff" }}>
      <FlexBox direction="vertical">
        <Divider />
        <Space size={100}>
          <Button type="primary" shape="round" size="large">
            <Link to="/">Home</Link>
          </Button>
          <Button type="primary" htmlType="submit" shape="round" size="large">
            <Link to={`/content/${params.id}`}>Next</Link>
          </Button>
        </Space>
      </FlexBox>
    </Footer>
  );
};

export default ButtonsFooter;
