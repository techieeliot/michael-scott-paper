import { FC } from "react";
import { Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Information from "./Information";
import { RadioGlobalStyle, RadioGroup } from "./styles";
import { RootState } from "../../../store/configureStore";
import { DispatchType } from "../../../type";
import { UPDATE_WEBSITE } from "../../../store/actionTypes";
import LayoutCard, { ILayoutCard } from "./LayoutCard";

const LayoutOptions: FC = () => {
  const websites = useSelector<RootState>(
    (state) => state.rootReducer.websiteBuilder.websites
  );
  const dispatch = useDispatch<DispatchType>();
  const baseUrl = "https://user-images.githubusercontent.com/19453294/";

  const handleSubmit = (site): object => {
    console.log(site);

    return dispatch({
      type: UPDATE_WEBSITE,
      website: site,
    });
  };

  const handleWebsiteData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("radio checked", e.target.value);
  };

  const cards: ILayoutCard[] = [
    {
      key: 1,
      layout: "Header - Two Columns",
      alt: "one rectangle above two rectangles",
      imageUrl: `${baseUrl}149674074-5679c4d1-5c86-4e0f-832b-e139ad25d6bd.png`,
    },
    {
      key: 2,
      layout: "Header - Three Columns",
      alt: "one rectangle above three rectangles",
      imageUrl: `${baseUrl}149674073-f950522d-62ca-442d-9de9-e2731efff94b.png`,
    },
    {
      key: 3,
      layout: "Header/Footer - Two Columns",
      alt: "three rows of sections but only the middle row has two rectangles",
      imageUrl: `${baseUrl}149674075-d4493e60-d7a3-4286-9287-9819129c8c75.png`,
    },
  ];

  return (
    <>
      <RadioGlobalStyle />
      <RadioGroup onChange={handleWebsiteData}>
        <Information />
        <Row gutter={[12, 48]} justify="space-between" className="select-row">
          {cards.map((card) => (
            <LayoutCard
              key={card.key}
              layout={card.layout}
              alt={card.alt}
              imageUrl={card.imageUrl}
            />
          ))}
        </Row>
      </RadioGroup>
    </>
  );
};

export default LayoutOptions;
