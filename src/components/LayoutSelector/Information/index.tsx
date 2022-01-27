import { FC } from "react";
import { Typography, Row, Col } from "antd";
import LayoutSelectorGlobalStyled from "../styles";

const { Paragraph } = Typography;

const Information: FC = () => {
  const bullets = [
    "The background color, or you can use a large image as the background",
    "Each container block can contain images or custom text",
    "Any text block can contain a background image or color",
  ];
  return (
    <>
      <LayoutSelectorGlobalStyled />
      <Row
        gutter={[12, 48]}
        justify="space-between"
        style={{
          fontSize: "initial",
        }}
      >
        <Col style={{ width: "100%" }}>
          <Paragraph>
            When choosing your layout there are several things you can customize
          </Paragraph>
          <ul>
            {bullets.map((bullet) => (
              <li>{bullet}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Information;
