import { FC, SetStateAction, useState } from "react";
import { Menu, Input } from "antd";

import "./index.css";

const { Item } = Menu;

const HeaderMenu: FC = () => {
  const [title, setTitle] = useState("Untitled Page");
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
        key="1"
        style={{
          textAlign: "center",
          height: "5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setTitle(e.target.value)
          }
        />
      </Item>
    </Menu>
  );
};

export default HeaderMenu;
