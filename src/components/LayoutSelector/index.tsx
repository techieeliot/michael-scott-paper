/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FC, useEffect } from "react";
import { Row, Col, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SelectLayoutHeader from "./SelectLayoutHeader";
import LayoutOptions from "./LayoutOptions";
import ButtonsFooter from "./ButtonsFooter";
import { RootState } from "../../store/configureStore";
import { DispatchType } from "../../type";
import Information from "./Information";
import { UPDATE_WEBSITE } from "../../store/actionTypes";

const LayoutSelector: FC = () => {
  const params = useParams();
  const websiteData = useSelector<RootState>((state) =>
    state.rootReducer.websiteBuilder.websites.find(
      (site) => site.id === params.id
    )
  );
  const dispatch = useDispatch<DispatchType>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (siteValues: object): object => {
    // console.log("Success:", siteValues);

    return dispatch({
      type: UPDATE_WEBSITE,
      website: siteValues,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };

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
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ width: "100%" }}
        >
          <Form.Item id="form-item-header" name="header">
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
          <Form.Item>
            <Information />
          </Form.Item>
          <Form.Item
            label="Layout"
            name="columns"
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
