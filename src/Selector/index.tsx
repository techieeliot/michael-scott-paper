import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Layout, Row, Col, Button, Typography, Divider, Card,
} from 'antd';

import './index.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Meta } = Card;

const Selector: FC = () => (
  <Row style={{ textAlign: 'left', height: '100vh', background: '#fff' }}>
    <Col span={24} style={{ height: '100vh' }}>
      <Header style={{
        background: '#fff', margin: '5vh auto 0 auto', height: 'auto', width: '100%',
      }}
      >
        <div
          style={{
            padding: '24px 24px 0 24px',
            margin: '0 auto',
            width: '80%',
          }}
        >
          <Title>Select a layout for your single page website</Title>
        </div>
      </Header>
      <Content className="site-layout" style={{ padding: '24px 50px', background: '#fff' }}>
        <div
          style={{
            padding: '12px 24px 24px 24px',
            margin: '0 auto',
            minHeight: '95%',
            width: '80%',
          }}
        >
          <Row style={{ margin: '0 auto 24px auto' }}>
            <Col>
              <Paragraph>When choosing your layout there are several things you can customize</Paragraph>
              <ul>
                <li>The background color, or you can use a large image as the background</li>
                <li>Each container block can contain images or custom text</li>
                <li>Any text block can contain a background image or color</li>
              </ul>
            </Col>
          </Row>

          <Row gutter={[12, 48]} justify="space-between" style={{ margin: '5vh auto' }}>
            <Col flex="1 1 25%">
              <Card
                style={{ width: 290 }}
                cover={<img alt="example" src="https://user-images.githubusercontent.com/19453294/149674074-5679c4d1-5c86-4e0f-832b-e139ad25d6bd.png" />}
              >
                <Meta description="Header - Two Columns" />
              </Card>
            </Col>
            <Col flex="1 1 25%">
              <Card
                style={{ width: 290 }}
                cover={<img alt="example" src="https://user-images.githubusercontent.com/19453294/149674073-f950522d-62ca-442d-9de9-e2731efff94b.png" />}
              >
                <Meta description="Header - Three Columns" />
              </Card>
            </Col>
            <Col flex="1 1 25%">
              <Card
                style={{ width: 290 }}
                cover={<img alt="example" src="https://user-images.githubusercontent.com/19453294/149674075-d4493e60-d7a3-4286-9287-9819129c8c75.png" />}
              >
                <Meta description="Header/Footer - Two Columns" />
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'right', padding: 24, background: '#fff' }}>
        <div
          style={{
            padding: '24px',
            margin: '0 auto',
            minHeight: '95%',
            width: '80%',
          }}
        >
          <Divider />

          <Button type="primary" shape="round" size="large">
            <Link to="/editor">
              Next
            </Link>
          </Button>
        </div>
      </Footer>
    </Col>
  </Row>
);

export default Selector;
