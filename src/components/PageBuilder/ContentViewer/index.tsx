import { FC } from "react";
import { Layout, Typography } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HeaderFooterTwoColumnsLayout from "./HeaderFooterTwoColumnsLayout";
import HeaderThreeColumnsLayout from "./HeaderThreeColumnsLayout";
import HeaderTwoColumnsLayout from "./HeaderTwoColumnsLayout";
import { RootState } from "../../../store/configureStore";
import { IWebsite } from "../../../store/interfaces/IWebsite";

const { Content } = Layout;
const { Paragraph } = Typography;

const ContentLayout: FC = () => {
  const params = useParams();
  const websiteData = useSelector<RootState>((state) =>
    state.rootReducer.websiteBuilder.websites.find(
      (site) => site.id === params.id
    )
  ) as IWebsite;

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
      {websiteData.layout === "Header - Two Columns" && (
        <HeaderTwoColumnsLayout />
      )}
      {websiteData.layout === "Header - Three Columns" && (
        <HeaderThreeColumnsLayout />
      )}
      {websiteData.layout === "Header/Footer - Two Columns" && (
        <HeaderFooterTwoColumnsLayout />
      )}
    </Content>
  );
};

export default ContentLayout;
