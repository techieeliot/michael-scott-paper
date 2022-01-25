import { Key, FC } from "react";
import { Col, Radio, Card, Image } from "antd";

const { Meta } = Card;

export interface ILayoutCard {
  key: Key;
  layout: string;
  alt: string;
  imageUrl: string;
}

const LayoutCard: FC<ILayoutCard> = ({ key, layout, alt, imageUrl }) => {
  return (
    <Col key={key} flex="1 1 25%">
      <Radio value={layout} className="select-column">
        <Card style={{ width: 290 }} cover={<Image alt={alt} src={imageUrl} />}>
          <Meta description={layout} />
        </Card>
      </Radio>
    </Col>
  );
};

export default LayoutCard;
