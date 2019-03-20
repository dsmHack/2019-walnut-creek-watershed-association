import { combineReducers } from "redux";
import * as address from "./address";
import * as layer from "./layer";
import * as huc from "./huc";
import * as dataPoints from "./data-points";

export default combineReducers({
    address: address.reducer,
    layer: layer.reducer,
    huc: huc.reducer,
    dataPoints: dataPoints.reducer
});
