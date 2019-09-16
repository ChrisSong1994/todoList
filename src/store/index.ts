import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import * as fromTodoList from "./reducer/todoList";

const store = createStore(
  reducer,
  { todoList: fromTodoList.initialState },
  applyMiddleware(logger)
);

export default store;
