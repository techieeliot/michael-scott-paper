import { createStore, combineReducers } from "redux";
import websiteBuilder from "./ducks/websiteBuilder";

const reducer = combineReducers({
  websiteBuilder,
});

const store = createStore(reducer);

export default store;
export type RootState = ReturnType<typeof reducer>;
