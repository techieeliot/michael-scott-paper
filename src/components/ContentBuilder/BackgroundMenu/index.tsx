import { FC, useState, useEffect } from "react";
import { Menu, Input, Empty, Button, Tooltip } from "antd";
import {
  LaptopOutlined,
  UserOutlined,
  PictureOutlined,
} from "@ant-design/icons";

import "./index.css";

const { SubMenu } = Menu;

const BackgroundMenu: FC = () => {
  const initialHexValue = window.localStorage.getItem("hexValue") || "#000";
  const [hexValue, setHexValue] = useState<string>(initialHexValue);

  useEffect(() => {
    return window.localStorage.setItem("hexValue", hexValue);
  }, [hexValue]);

  return (
    <Menu
      id="background-menu"
      mode="inline"
      // defaultSelectedKeys={['1']}
      defaultOpenKeys={["sub3", "sub4"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <SubMenu
        className="hex-submenu"
        key="sub3"
        icon={<UserOutlined />}
        title="Background Color"
      >
        <Menu.Item key="1">
          <Tooltip
            trigger={["focus"]}
            title="Acceptable formats: #fff, #ffffff, white"
            placement="topLeft"
            overlayClassName="numeric-input"
          >
            <Input
              id="hex-input"
              placeholder="input colors"
              addonBefore={<div>hex #</div>}
              addonAfter={
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    background: `${hexValue}`,
                  }}
                />
              }
              onPressEnter={(e) =>
                setHexValue((e.target as HTMLInputElement).value)
              }
              allowClear
              showCount
              maxLength={20}
            />
          </Tooltip>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        className="image-submenu"
        key="sub4"
        icon={<LaptopOutlined />}
        title="Background Image"
      >
        <Menu.Item key="2" style={{ height: "auto" }}>
          <Button
            id="select-image-btn"
            type="link"
            style={{
              height: "fit-content",
              width: "fit-content",
              background: "#fafafa",
              border: "1px dashed #d9d9d9",
            }}
          >
            <Empty
              image={<PictureOutlined style={{ fontSize: "75px" }} />}
              description="select image"
              imageStyle={{
                height: 60,
              }}
            />
          </Button>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default BackgroundMenu;
