import * as actionTypes from "../actionTypes";
import { IWebsite } from "../../interfaces/IWebsite";
import { WebsiteAction, WebsiteState } from "../../type";

export const initialState: WebsiteState = {
  websites: [
    {
      id: 98779877,
      layout: "Header - Two Columns",
      title: "Dwight's Page",
    },
    {
      id: 8976987667,
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
      // eslint-disable-next-line no-case-declarations
      const updatedWebsites: IWebsite[] = state.websites.filter(
        (website: { id: number }) => website.id !== action.website.id
      );
      return {
        ...state,
        websites: updatedWebsites,
      };
      break;

    // case actionTypes.UPDATE_LAYOUT:
    //   // eslint-disable-next-line no-case-declarations
    //   const updateLayout: IWebsite[] = state.websites.filter(
    //     (website: { id: number }) => website.id !== action.website.id
    //   );
    //   return {
    //     ...state,
    //     websites: updatedWebsites,
    //   };
    //   break;

    default:
      break;
  }
  return state;
};

export default websiteBuilderReducer;
