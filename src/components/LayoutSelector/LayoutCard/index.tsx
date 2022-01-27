import { FC } from "react";
import { Col, Card, Image, Radio } from "antd";

const { Meta } = Card;

export interface ILayoutCard {
  key: number;
  layout: string;
  alt: string;
  imageUrl: string;
}

const LayoutCard: FC<ILayoutCard> = ({ layout, alt, imageUrl }) => {
  return (
    <Col key={imageUrl} flex="1 1 25%">
      <Radio value={layout} className="select-column">
        <Card
          style={{ width: 290 }}
          cover={<Image alt={alt} src={imageUrl} preview={false} />}
        >
          <Meta description={layout} />
        </Card>
      </Radio>
    </Col>
  );
};

export default LayoutCard;
