import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/user";

let rootReducer = combineReducers({ userReducer });

let store = createStore(rootReducer);
