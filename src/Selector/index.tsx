import {FC} from 'react';
import { Link } from "react-router-dom";
import { Layout, Button} from 'antd';

import './index.css';

const { Header, Content, Footer } = Layout;

const Selector: FC = () => {
  return (
  <>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content>
    <Footer>
      <Button type="primary" shape="round" size="large">
        <Link to="/editor">
          Next
        </Link>
      </Button>
    </Footer>
  </>
  );
}

export default Selector;
