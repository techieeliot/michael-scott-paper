import { FC } from "react";
import { Layout, Typography } from "antd";
import HeaderFooterTwoColumnsLayout from "./HeaderFooterTwoColumnsLayout";
import HeaderThreeColumnsLayout from "./HeaderTwoColumnsLayout";
import HeaderTwoColumnsLayout from "./HeaderThreeColumnsLayout";

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
      {false && <HeaderTwoColumnsLayout />}
      {true && <HeaderThreeColumnsLayout />}
      {false && <HeaderFooterTwoColumnsLayout />}
    </Content>
  );
};

export default ContentLayout;
