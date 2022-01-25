import { IWebsite } from "../../interfaces/IWebsite";
import { WebsiteAction } from "../../type";
import * as actionTypes from "../actionTypes";

export const addWebsite = (website: IWebsite): WebsiteAction => {
  return {
    type: actionTypes.ADD_WEBSITE,
    website,
  };
};

export const removeWebsite = (website: IWebsite): WebsiteAction => {
  return {
    type: actionTypes.REMOVE_WEBSITE,
    website,
  };
};

export const updateWebsite = (website: IWebsite): WebsiteAction => {
  return {
    type: actionTypes.UPDATE_WEBSITE,
    website,
  };
};
