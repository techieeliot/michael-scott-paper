import { FC, useState, useEffect } from "react";
import { Menu, Input, Empty, Button, Tooltip, Upload, message } from "antd";
import {
  LaptopOutlined,
  UserOutlined,
  PictureOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import "./index.css";

const { SubMenu } = Menu;

const BackgroundMenu: FC = () => {
  const initialHexValue = window.localStorage.getItem("hexValue") || "#000";
  const [hexValue, setHexValue] = useState<string>(initialHexValue);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (info: {
    file: { status: string; originFileObj: Blob };
  }) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setLoading(false);
    }
  };

  const uploadButton = (
    <div id="upload-button-rectangle-component">
      {loading ? (
        <LoadingOutlined id="loading-outlined" style={{ fontSize: "60px" }} />
      ) : (
        <PictureOutlined id="picture-outlined" style={{ fontSize: "60px" }} />
      )}
      <div style={{ marginTop: 8 }}>select image</div>
    </div>
  );

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
        className="background-menu-image-submenu"
        key="sub4"
        icon={<LaptopOutlined />}
        title="Background Image"
      >
        <Menu.Item
          key="2"
          id="background-menu-menu-item-image-uploader"
          style={{ height: "auto" }}
        >
          {/* <Button
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
          </Button> */}
          <Upload
            id="background-menu-upload-image"
            name="background-image"
            listType="picture-card"
            className="background-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            // beforeUpload={beforeUpload}
            onChange={handleChange}
            accept="image/*"
          >
            {imageUrl ? (
              <img
                id="background-menu-uploaded-image"
                src={imageUrl}
                alt="background to display in selected section"
                style={{ width: "100%" }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default BackgroundMenu;
