import { FC } from "react";
import { Link } from "react-router-dom";
import { Menu, Radio, Card, Space } from "antd";
import { LaptopOutlined, UserOutlined, EditOutlined } from "@ant-design/icons";

import "./index.css";

const { SubMenu, Item } = Menu;

const SelectionMenu: FC = () => {
  const options = [
    { label: "Header", value: "Header" },
    { label: "Column 1", value: "Column 1" },
    { label: "Column 2", value: "Column 2" },
  ];
  return (
    <Menu
      id="selection-menu"
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1", "sub2"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <SubMenu key="sub1" icon={<UserOutlined />} title="Header - Two Columns">
        <Card
          style={{ width: "100%" }}
          cover={
            <img
              alt="layout"
              // eslint-disable-next-line max-len
              src="https://user-images.githubusercontent.com/19453294/149674074-5679c4d1-5c86-4e0f-832b-e139ad25d6bd.png"
            />
          }
          extra={
            <Space>
              <Link to="/">
                New Page <EditOutlined key="edit" />
              </Link>
              <Link to="/layout">
                Edit Layout <EditOutlined key="edit" />
              </Link>
            </Space>
          }
        />
      </SubMenu>{" "}
      <SubMenu key="sub2" icon={<LaptopOutlined />} title="Background">
        <Item key="1" style={{ height: "auto" }}>
          <Radio.Group
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "20px 0 20px 0",
            }}
            options={options}
          />
        </Item>
      </SubMenu>
    </Menu>
  );
};

export default SelectionMenu;
