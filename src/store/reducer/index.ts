import { combineReducers } from "redux";
import * as fromTodoList from "./todoList";

export const reducer = combineReducers({ todos: fromTodoList.reducer });
