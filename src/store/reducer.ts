import * as actionTypes from "./actionTypes";

const initialState: WebsiteState = {
  websites: {
    id: 1,
    layout: "Header - Two Columns",
    title: "Untitled Page",
  },
};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: WebsiteState = initialState,
  action: WebsiteAction
): WebsiteAction => {
  switch (action.type) {
    case actionTypes.ADD_WEBSITE:
      // eslint-disable-next-line no-case-declarations
      const newWebsite: Website = {
        id: Math.random(),
        layout: action.website.layout,
        title: action.website.title,
      };
      return {
        ...state,
        website: state.websites.concat(newWebsite),
      };
      break;

    case actionTypes.REMOVE_WEBSITE:
      // eslint-disable-next-line no-case-declarations
      const updatedWebsites: Website[] = state.websites.filter(
        (website: { id: number }) => website.id !== action.website.id
      );
      return {
        ...state,
        website: updatedWebsites,
      };
      break;

    default:
      break;
  }
  return state;
};

export default reducer;
