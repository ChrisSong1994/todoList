import { combineReducers } from "redux";
import * as fromTodoList from "./todoList";

export const reducer = combineReducers({ todoList: fromTodoList.reducer });
