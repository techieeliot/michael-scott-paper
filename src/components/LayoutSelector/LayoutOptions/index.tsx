import { FC } from "react";
import { Row, Col, Card, Radio, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { DispatchType } from "../../../type";
import Information from "./Information";
import { RadioGlobalStyle, RadioGroup } from "./styles";

const { Meta } = Card;

const LayoutSelection: FC = () => {
  const websites = useSelector<RootState>(
    (state) => state.websiteBuilder.websites
  );
  const dispatch = useDispatch<DispatchType>();

  const handleWebsiteData = (e: string) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <RadioGlobalStyle />
      <RadioGroup onChange={handleWebsiteData}>
        <Information />
        <Row
          gutter={[12, 48]}
          justify="space-between"
          style={{ margin: "5vh auto" }}
          className="select-row"
        >
          <Col flex="1 1 25%">
            <Radio value="Header - Two Columns" className="select-column">
              <Card
                style={{ width: 290 }}
                cover={
                  <img
                    alt="example"
                    // eslint-disable-next-line max-len
                    src="https://user-images.githubusercontent.com/19453294/149674074-5679c4d1-5c86-4e0f-832b-e139ad25d6bd.png"
                  />
                }
              >
                <Meta description="Header - Two Columns" />
              </Card>
            </Radio>
          </Col>
          <Col flex="1 1 25%">
            <Tooltip title="Unavailable—check back soon!">
              {/* remove this tooltip later */}
              <Radio
                value="Header - Three Columns"
                className="select-column"
                disabled
              >
                <Card
                  style={{ width: 290 }}
                  cover={
                    <img
                      alt="example"
                      // eslint-disable-next-line max-len
                      src="https://user-images.githubusercontent.com/19453294/149674073-f950522d-62ca-442d-9de9-e2731efff94b.png"
                    />
                  }
                >
                  <Meta description="Header - Three Columns" />
                </Card>
              </Radio>
            </Tooltip>
          </Col>
          <Col flex="1 1 25%">
            <Tooltip title="Unavailable—check back soon!">
              {/* remove tooltip later */}
              <Radio
                value="Header/Footer - Two Columns"
                className="select-column"
                disabled
              >
                <Card
                  style={{ width: 290 }}
                  cover={
                    <img
                      alt="example"
                      // eslint-disable-next-line max-len
                      src="https://user-images.githubusercontent.com/19453294/149674075-d4493e60-d7a3-4286-9287-9819129c8c75.png"
                    />
                  }
                >
                  <Meta description="Header/Footer - Two Columns" />
                </Card>
              </Radio>
            </Tooltip>
          </Col>
        </Row>
      </RadioGroup>
    </>
  );
};

export default LayoutSelection;
function useSelector<T>(arg0: (state: any) => any) {
  throw new Error("Function not implemented.");
}

function useDispatch<T>() {
  throw new Error("Function not implemented.");
}

function use(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}