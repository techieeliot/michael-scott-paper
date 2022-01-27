import { IWebsite } from "../interfaces/IWebsite";
import { WebsiteAction } from "../typings/index";
import * as actionTypes from "./actionTypes";

export const addWebsite = (website: IWebsite): WebsiteAction => {
  return {
    type: actionTypes.ADD_WEBSITE,
    payload: website,
  };
};

export const removeWebsite = (website: IWebsite): WebsiteAction => {
  return {
    type: actionTypes.REMOVE_WEBSITE,
    payload: website,
  };
};

export const updateWebsite = (website: IWebsite): WebsiteAction => {
  return {
    type: actionTypes.UPDATE_WEBSITE,
    payload: website,
  };
};
