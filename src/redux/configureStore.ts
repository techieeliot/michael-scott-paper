import { combineReducers, createStore } from "redux";
import rootReducer from "./ducks/rootReducer";

const store = createStore(rootReducer);

export default store;
