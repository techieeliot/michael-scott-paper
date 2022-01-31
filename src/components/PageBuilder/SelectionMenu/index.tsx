import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Menu, Radio, Card, Space, Image } from "antd";
import { LaptopOutlined, UserOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { UPDATE_WEBSITE } from "../../../store/actions/actionTypes";
import { IWebsite } from "../../../store/interfaces/IWebsite";
import { DispatchType } from "../../../store/typings";
import { layoutPngs } from "../../LayoutSelector";

const { SubMenu, Item } = Menu;

const SelectionMenu: FC = () => {
  const [selectedLayoutPng, setSelectedLayoutPng] = useState("");
  const params = useParams();
  const websiteData = useSelector<RootState>((state) =>
    state.rootReducer.websiteBuilder.websites.find(
      (site) => site.id === params.id
    )
  ) as IWebsite;
  const dispatch = useDispatch<DispatchType>();
  const [layoutValue] = useState(websiteData.layout);

  useEffect(() => {
    if (layoutValue !== websiteData.layout) {
      const siteValues = {
        id: params.id,
        title: websiteData.title,
        layout: layoutValue,
      } as IWebsite;

      dispatch({
        type: UPDATE_WEBSITE,
        payload: siteValues,
      });
    }
  }, [dispatch, params.id, layoutValue, websiteData.layout, websiteData.title]);

  useEffect(() => {
    if (websiteData.layout) {
      switch (websiteData.layout) {
        case "Header - Two Columns":
          setSelectedLayoutPng(layoutPngs.headerTwoColumns);
          break;
        case "Header - Three Columns":
          setSelectedLayoutPng(layoutPngs.headerThreeColumns);
          break;
        case "Header/Footer - Two Columns":
          setSelectedLayoutPng(layoutPngs.headerFooterTwoColumns);
          break;

        default:
          break;
      }
    }
  }, [websiteData.layout]);

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
      <SubMenu key="sub1" icon={<UserOutlined />} title={websiteData.layout}>
        <Card
          style={{ width: "100%" }}
          cover={<Image alt="layout" src={selectedLayoutPng} preview={false} />}
          extra={
            <Space>
              <Link to="/">
                New Page <EditOutlined key="edit" />
              </Link>
              <Link to={`/layout/${params.id}`}>
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
