import { WebsiteAction, WebsiteState } from "../types/type";
import * as actionTypes from "../actionTypes";
import { IWebsite } from "../interfaces/IWebsite";

const initialState: WebsiteState = {
  websites: [
    {
      id: 1,
      layout: "Header - Two Columns",
      title: "Untitled Page",
    },
    {
      id: 2,
      layout: "Header - Three Columns",
      title: "Michael",
    },
  ],
};

const websiteReducer = (
  // eslint-disable-next-line default-param-last
  state: WebsiteState = initialState,
  action: WebsiteAction
): WebsiteState => {
  switch (action.type) {
    case actionTypes.ADD_WEBSITE:
      // eslint-disable-next-line no-case-declarations
      const newWebsite: IWebsite = {
        id: Math.random(),
        layout: action.website.layout,
        title: action.website.title,
      };
      return {
        ...state,
        websites: state.websites.concat(newWebsite),
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

    default:
      break;
  }
  return state;
};

export default websiteReducer;
