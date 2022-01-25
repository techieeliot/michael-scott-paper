import { combineReducers } from "redux";
import { websiteBuilderReducer } from "./websiteBuilderReducer";

const rootReducer = combineReducers({
  websiteBuilder: websiteBuilderReducer,
});

export default rootReducer;
