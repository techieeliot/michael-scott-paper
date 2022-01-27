import { FC, useEffect } from "react";
import { Row, Col, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SelectLayoutHeader from "./SelectLayoutHeader";
import LayoutOptions from "./LayoutOptions";
import ButtonsFooter from "./ButtonsFooter";
import { RootState } from "../../store/configureStore";
import { DispatchType } from "../../store/typings/index";
import Information from "./Information";
import { UPDATE_WEBSITE } from "../../store/actions/actionTypes";

const LayoutSelector: FC = () => {
  const params = useParams();
  const websiteData = useSelector<RootState>((state) =>
    state.rootReducer.websiteBuilder.websites.find(
      (site: { id: string }) => site.id === params.id
    )
  );
  const dispatch = useDispatch<DispatchType>();

  const handleSubmit = (siteValues: object): object => {
    console.log("Success:", siteValues);

    return dispatch({
      type: UPDATE_WEBSITE,
      website: siteValues,
    });
  };

  useEffect(() => {
    if (websiteData !== null)
      localStorage.setItem("webSiteData", JSON.stringify(websiteData));
  }, [websiteData]);

  return (
    <Row style={{ textAlign: "left", height: "100vh", background: "#fff" }}>
      <Col span={24} style={{ height: "100vh" }}>
        <Form
          name="basic"
          labelCol={{ span: 3 }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete="off"
          style={{ width: "100%" }}
        >
          <Form.Item
            id="form-item-header"
            label="header"
            name="header"
            style={{ width: "100%" }}
          >
            <SelectLayoutHeader />
          </Form.Item>
          <Form.Item
            label="Website Title"
            name="title"
            rules={[
              { required: true, message: "Please input your website title!" },
            ]}
          >
            {websiteData && (
              <Input
                size="large"
                prefix={<UserOutlined />}
                placeholder="Add a custom page title"
              />
            )}
          </Form.Item>
          <Form.Item id="form-item-info" label="information" name="information">
            <Information />
          </Form.Item>
          <Form.Item
            label="Layout"
            name="layout"
            rules={[
              {
                required: true,
                message: "Please input your column selection!",
              },
            ]}
          >
            <LayoutOptions />
          </Form.Item>
          <Form.Item name="footer">
            <ButtonsFooter />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LayoutSelector;
