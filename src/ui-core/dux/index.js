import { combineReducers } from "redux";
import * as address from "./address";

export default combineReducers({ address: address.reducer });