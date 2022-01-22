import { FC } from "react";
import { Layout, Typography } from "antd";
import HeaderFooterTwoColumnsLayout from "./HeaderFooterTwoColumnsLayout";
import HeaderTwoColumnsLayout from "./HeaderTwoColumnsLayout";
import HeaderThreeColumnsLayout from "./HeaderThreeColumnsLayout";

import "./index.css";

const { Content } = Layout;
const { Paragraph } = Typography;

const ContentLayout: FC = () => {
  return (
    <Content
      id="content-layout"
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: "95%",
      }}
    >
      {/* conditionally render the text or the layout
            - set not to show right now */}
      {false && (
        <Paragraph id="empty-content">
          Use the panel on the right to add color and/or images to your
          background
        </Paragraph>
      )}
      {true && <HeaderTwoColumnsLayout />}
      {false && <HeaderThreeColumnsLayout />}
      {false && <HeaderFooterTwoColumnsLayout />}
    </Content>
  );
};

export default ContentLayout;
