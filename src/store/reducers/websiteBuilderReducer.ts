/* eslint-disable no-case-declarations */
import * as actionTypes from "../actionTypes";
import { WebsiteAction, WebsiteState } from "../../type";

export const initialState: WebsiteState = {
  websites: [
    {
      id: "bb1674-235-a2-8f0a-69n5b2bc21c7",
      layout: "Header - Two Columns",
      title: "Dwight's Page",
    },
    {
      id: "he1674-247-a2-8voa9-69cjb222k1c7",
      layout: "Header - Three Columns",
      title: "Michael's page",
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
        websites: state.websites.concat(action.website),
      };
      break;

    case actionTypes.REMOVE_WEBSITE:
      return {
        ...state,
        websites: state.websites.filter(
          (website: { id: number }) => website.id !== action.website.id
        ),
      };
      break;

    case actionTypes.UPDATE_WEBSITE_LAYOUT:
      return {
        ...state,
        websites: state.websites.find((site) => site.id === action.website),
      };
      break;

    default:
      break;
  }
  return state;
};

export default websiteBuilderReducer;
