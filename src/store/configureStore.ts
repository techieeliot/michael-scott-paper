import { createStore, combineReducers } from "redux";
import websiteBuilder from "./ducks/websiteBuilder";
import { loadState } from "../localStorage";
import { WebsiteState } from "../type";

const persistedState = loadState();

const reducer = combineReducers({
  websiteBuilder,
});

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

const store = createStore(reducer, persistedState);

export default store;
export type RootState = ReturnType<typeof reducer>;
