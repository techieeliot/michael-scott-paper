import { FC } from "react";
import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const SelectLayoutHeader: FC = () => {
  return (
    <Header
      id="selection-header"
      style={{
        background: "#fff",
        margin: "5vh auto 0 auto",
        height: "auto",
        width: "100%",
      }}
    >
      <div
        style={{
          padding: "24px 24px 0 24px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Title>
          Add a custom title and select a layout for your single page website
        </Title>
      </div>
    </Header>
  );
};

export default SelectLayoutHeader;
