import { combineReducers } from "redux";
import userReducer from "./userReducer";

export const myReducers = combineReducers({
    user : userReducer
})

