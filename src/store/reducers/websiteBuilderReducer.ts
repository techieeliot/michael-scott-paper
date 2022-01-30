import * as actionTypes from "../actions/actionTypes";
import { WebsiteAction, WebsiteState } from "../typings/index";

export const initialState: WebsiteState = {
  websites: [
    {
      id: "74f352-c102-2f87-0103-ba3da6f0b3",
      layout: "",
      title: "",
    },
    {
      id: "07e48f5-dd23-0520-66a5-83ebaf8f0bde",
      layout: "Header - Three Columns",
      title: "Michael's page",
    },
    {
      id: "1f7b32d-5165-4e82-fb55-5cf2230ffea",
      layout: "Header - Two Columns",
      title: "Dwight's Page",
    },
    {
      id: "he1674-247-a2-8voa9-69cjb222k1c7",
      layout: "Header/Footer - Two Columns",
      title: "Jim's page",
    },
  ],
};

const websiteBuilderReducer = (
  // eslint-disable-next-line default-param-last
  state: WebsiteState = initialState,
  action: WebsiteAction
): WebsiteState => {
  switch (action.type) {
    case actionTypes.ADD_WEBSITE:
      return {
        ...state,
        websites: state.websites.concat(action.payload),
      };
      break;

    case actionTypes.REMOVE_WEBSITE:
      return {
        ...state,
        websites: state.websites.filter(
          (website: { id: number }) => website.id !== action.payload.id
        ),
      };
      break;

    case actionTypes.UPDATE_WEBSITE:
      return {
        ...state,
        websites: state.websites.map((site) =>
          site.id === action.payload.id
            ? {
                ...site,
                title: action.payload.title,
                layout: action.payload.layout,
              }
            : site
        ),
      };
      break;

    default:
      break;
  }
  return state;
};

export default websiteBuilderReducer;
