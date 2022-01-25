import { createStore, combineReducers } from "redux";
import rootReducer from "./reducers/index";

const reducer = combineReducers({
  rootReducer,
});

const store = createStore(reducer);

export default store;
export type RootState = ReturnType<typeof reducer>;
