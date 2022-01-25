/* eslint-disable react/destructuring-assignment */
import { Col, Radio, Card, Image } from "antd";
import React from "react";

const { Meta } = Card;

export interface ILayoutCard {
  key: React.Key;
  layout: string;
  alt: string;
  imageUrl: string;
}

const LayoutCard: React.FC<ILayoutCard> = (props) => {
  return (
    <Col key={props.key} flex="1 1 25%">
      <Radio value={props.layout} className="select-column">
        <Card
          style={{ width: 290 }}
          cover={<Image alt={props.alt} src={props.imageUrl} />}
        >
          <Meta description={props.layout} />
        </Card>
      </Radio>
    </Col>
  );
};

export default LayoutCard;
