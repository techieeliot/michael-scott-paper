import { FC } from "react";
import { Menu } from "antd";

import "./index.css";

const { Item } = Menu;

const HeaderMenu: FC = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{
        height: "5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Item
        style={{
          textAlign: "center",
          height: "5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Untitled Page
      </Item>
    </Menu>
  );
};

export default HeaderMenu;
