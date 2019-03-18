import { combineReducers } from "redux";
import * as address from "./address";
import * as layer from "./layer";
import * as huc from "./huc";

export default combineReducers({
    address: address.reducer,
    layer: layer.reducer,
    huc: huc.reducer
});
