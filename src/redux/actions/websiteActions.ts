import { IWebsite } from "../interfaces/IWebsite";
import { WebsiteAction } from "../types/type";
import * as actionTypes from "../actionTypes";

const addWebsite = (website: IWebsite): WebsiteAction => {
  return {
    type: actionTypes.ADD_WEBSITE,
    website,
  };
};

const removeWebsite = (website: IWebsite): WebsiteAction => {
  return {
    type: actionTypes.REMOVE_WEBSITE,
    website,
  };
};

export default {
  addWebsite,
  removeWebsite,
};
