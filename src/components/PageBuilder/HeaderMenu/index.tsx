import { FC, useState, useEffect } from "react";
import { Menu, Typography } from "antd";

const { Item } = Menu;
const { Paragraph } = Typography;

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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          height: "100%",
          width: "200px",
        }}
      >
        <Paragraph
          style={{
            background: "white",
            lineHeight: "initial",
          }}
          editable={{
            onChange: setTitle,
            triggerType: ["icon", "text"],
          }}
        >
          {title}
        </Paragraph>
      </Item>
    </Menu>
  );
};

export default HeaderMenu;
