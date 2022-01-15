import {FC} from 'react';
import { Layout, Menu, Card, Space, Typography, Checkbox} from 'antd';
import { UserOutlined, LaptopOutlined, EditOutlined, PictureOutlined } from '@ant-design/icons';

import './App.css';

const { SubMenu, Item } = Menu;
const { Header, Content, Sider } = Layout;
const { Paragraph, Link } = Typography;

const App: FC = () => {
  return (
    <div className="App">
      <Layout style={{height: "100vh"}}>
        <Header className="header">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{margin: "0px, auto"}}>
            <Item style={{textAlign:"center"}}>Untitled Page</Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Header - Two Columns">
                <Card
                  style={{ width: '100%' }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                </Card>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Background">
                <Item key="9">Header</Item>
                <Item key="10">Column 2</Item>
                <Item key="11">Column 2</Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Background Color">
                <Menu.Item key="1">Hex #</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Background Image">
                <Menu.Item key="5">select image</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
