import { createStore, combineReducers } from "redux";
import websiteBuilderReducer from "./ducks/websiteBuilder";

const reducer = combineReducers({
  websiteBuilderReducer,
});

const store = createStore(reducer);

export default store;
