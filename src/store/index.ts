import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { reducer, initialState } from "./reducer";

const store = createStore(reducer, initialState, applyMiddleware(logger));

export default store;
