import { combineReducers } from "redux";
import websiteReducer from "./websiteReducer";

const rootReducer = combineReducers({
  websiteReducer,
});

export default rootReducer;
