import { FC, SetStateAction, useState, useEffect } from "react";
import { Menu, Input } from "antd";

const { Item } = Menu;

const HeaderMenu: FC = () => {
  const initialTitle = window.localStorage.getItem("title") || "Untitled Page";

  const [title, setTitle] = useState<string>(initialTitle);

  useEffect(() => {
    return window.localStorage.setItem("title", title);
  }, [title]);

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
      selectable={false}
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
          onChange={(e: { target: { value: SetStateAction<string> } }) => {
            setTitle(typeof e.target.value === "string" ? e.target.value : "");
          }}
          value={title}
        />
      </Item>
    </Menu>
  );
};

export default HeaderMenu;
