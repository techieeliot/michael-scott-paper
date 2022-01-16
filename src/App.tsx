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
      <Layout style={{height: "100%"}}>
        <Header className="header" style={{ position: "fixed", zIndex: 1, width: "100%", height: "5vh" }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ height: "5vh", 	display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Item style={{textAlign:"center", height: "5vh", display: "flex", justifyContent: "center", alignItems: "center"}}>Untitled Page</Item>
          </Menu>
        </Header>
        <Layout style={{ marginTop: "5vh", height: "95vh"}}>
          <Sider width={"16.67%"} className="site-layout-background" style={{overflowY: "hidden", overflowX: "hidden", position: "fixed", top: "5vh", left: "0", bottom: "0"}}>
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
                        alt="layout"
                        src={"https://user-images.githubusercontent.com/19453294/149674074-5679c4d1-5c86-4e0f-832b-e139ad25d6bd.png"} // layout1
                        // src={"https://user-images.githubusercontent.com/19453294/149674073-f950522d-62ca-442d-9de9-e2731efff94b.png"} // layout2
                        // src={"https://user-images.githubusercontent.com/19453294/149674075-d4493e60-d7a3-4286-9287-9819129c8c75.png"} // layout3
                      />
                    }
                    actions={[
                      <EditOutlined key="edit" />,
                    ]}
                  >
                  </Card>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Background">
                <Item key="9">
                  <Space>
                    <Checkbox >Header</Checkbox>
                    </Space>
                </Item>
                <Item key="10">
                  <Space>
                    <Checkbox >Column 1</Checkbox>
                  </Space>
                </Item>
                <Item key="11">
                  <Space>
                    <Checkbox >Column 2</Checkbox>
                </Space>
                </Item>
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
              <Paragraph>Use the panel on the right to add color and/or images to your background</Paragraph>
            </Content>
          </Layout>
          <Sider width={"16.67%"} className="site-layout-background" style={{overflowY: "hidden", overflowX: "hidden", position: "fixed", top: "5vh", right: "0", bottom: "0"}}>
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
                <Menu.Item key="5" style={{ height: "10%"}}>
                  <Space direction='vertical'>
                    <PictureOutlined style={{ width: "100%" }} />
                    <Link>select image</Link>
                  </Space>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
