import { FC } from "react";
import { Typography, Row, Col } from "antd";

import "./index.css";

const { Paragraph } = Typography;

const Information: FC = () => {
  return (
    <Row
      style={{
        margin: "0 auto 24px auto",
        fontSize: "initial",
      }}
    >
      <Col>
        <Paragraph>
          When choosing your layout there are several things you can customize
        </Paragraph>
        <ul>
          <li>
            The background color, or you can use a large image as the background
          </li>
          <li>Each container block can contain images or custom text</li>
          <li>Any text block can contain a background image or color</li>
        </ul>
      </Col>
    </Row>
  );
};

export default Information;
