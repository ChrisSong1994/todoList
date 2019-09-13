import { combineReducers } from "redux";
import * as fromTodoList from "./todoList";

export interface State {
  todoList: fromTodoList.State;
}

export const initialState: State = {
  todoList: fromTodoList.initialState
};

export const reducer = combineReducers({ todoList: fromTodoList.reducer });
