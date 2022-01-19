/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as actionTypes from "./actionTypes";

export function addWebsite(website: Website) {
  const action: WebsiteAction = {
    type: actionTypes.ADD_WEBSITE,
    website,
  };
  return fakeHttpRequest(action);
}

export function removeWebsite(website: Website) {
  const action: WebsiteAction = {
    type: actionTypes.REMOVE_WEBSITE,
    website,
  };
  return fakeHttpRequest(action);
}

export function fakeHttpRequest(action: WebsiteAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
