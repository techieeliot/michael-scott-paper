/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as actionTypes from "./actionTypes";

export function addWebsite(website: Website) {
  const action: WebsiteAction = {
    type: actionTypes.ADD_WEBSITE,
    website,
  };
  return action;
}

export function removeWebsite(website: Website) {
  const action: WebsiteAction = {
    type: actionTypes.REMOVE_WEBSITE,
    website,
  };
  return action;
}
