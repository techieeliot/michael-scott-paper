import * as actionTypes from "./actionTypes";

const initialState: WebsiteState = {
  websites: [
    {
      id: 1,
      layout: "Header - Two Columns",
      title: "Untitled Page",
      content: {
        header: {
          content: {},
          background: "",
        },
        column1: {
          content: {},
          background: "",
        },
        column2: {
          content: {},
          background: "",
        },
        column3: {
          content: {},
          background: "",
        },
        footer: {
          content: {},
          background: "",
        },
      },
    },
    {
      id: 2,
      layout: "Header - Three Columns",
      title: "Michael",
      content: {
        header: {
          content: {},
          background: "",
        },
        column1: {
          content: {},
          background: "",
        },
        column2: {
          content: {},
          background: "",
        },
        column3: {
          content: {},
          background: "",
        },
        footer: {
          content: {},
          background: "",
        },
      },
    },
  ],
};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: WebsiteState = initialState,
  action: WebsiteAction
): WebsiteState => {
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
        websites: state.websites.concat(newWebsite),
      };
      break;

    case actionTypes.REMOVE_WEBSITE:
      // eslint-disable-next-line no-case-declarations
      const updatedWebsites: Website[] = state.websites.filter(
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

export default reducer;
