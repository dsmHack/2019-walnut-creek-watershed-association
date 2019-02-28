import { createStore, compose } from "redux";
import rootReducer from "./index";

const initialState = {};

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    rootReducer,
    initialState,
    enhancers
);

export default store;