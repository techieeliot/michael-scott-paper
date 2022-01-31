import { FC, useState, useEffect } from "react";
import { Menu, Typography } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { IWebsite } from "../../../store/interfaces/IWebsite";
import { DispatchType } from "../../../store/typings";
import { UPDATE_WEBSITE } from "../../../store/actions/actionTypes";

const { Item } = Menu;
const { Paragraph } = Typography;

const HeaderMenu: FC = () => {
  const params = useParams();
  const websiteData = useSelector<RootState>((state) =>
    state.rootReducer.websiteBuilder.websites.find(
      (site) => site.id === params.id
    )
  ) as IWebsite;
  const dispatch = useDispatch<DispatchType>();
  const [titleValue, setTitleValue] = useState(websiteData.title);

  useEffect(() => {
    if (titleValue !== websiteData.title) {
      const siteValues = {
        id: params.id,
        title: titleValue,
        layout: websiteData.layout,
      } as IWebsite;

      dispatch({
        type: UPDATE_WEBSITE,
        payload: siteValues,
      });
    }
  }, [dispatch, params.id, titleValue, websiteData.layout, websiteData.title]);

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
            onChange: setTitleValue,
            triggerType: ["icon", "text"],
          }}
        >
          {titleValue}
        </Paragraph>
      </Item>
    </Menu>
  );
};

export default HeaderMenu;
