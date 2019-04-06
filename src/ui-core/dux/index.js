import { combineReducers } from "redux";
import * as layer from "./layer";
import * as huc from "./huc";
import * as dataPoints from "./data-points";
import * as appState from './appState';

export default combineReducers({
    layer: layer.reducer,
    huc: huc.reducer,
    dataPoints: dataPoints.reducer,
    appState: appState.reducer
});
