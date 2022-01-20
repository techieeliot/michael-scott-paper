import { FC } from "react";
import { Link } from "react-router-dom";
import { Menu, Card } from "antd";
import { UserOutlined, EditOutlined } from "@ant-design/icons";

import "./index.css";

const { SubMenu } = Menu;

const LayoutMenu: FC = () => {
  return (
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
          <div>
            <Link to="/">
              Reselect Layout <EditOutlined key="edit" />
            </Link>
          </div>
        }
      />
    </SubMenu>
  );
};

export default LayoutMenu;
