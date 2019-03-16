import { combineReducers } from "redux";
import * as address from "./address";
import * as layer from "./layer";

export default combineReducers({ address: address.reducer, layer: layer.reducer });