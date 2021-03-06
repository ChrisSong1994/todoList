export interface Todo {
  id: number;
  name: string;
  done: boolean;
  date: number;
}

export interface State {
  todoList: Todo[];
}

export enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
  CLEAR_TODO = "CLEAR_TODO",
  SET_TODO_STATE = "SET_TODO_STATE"
}

export interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: { todo: Todo };
}

export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  payload: { id: number };
}

export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  payload: { id: number };
}

export interface ClearTodoAction {
  type: ActionTypes.CLEAR_TODO;
}

export interface SetTodoStateAction {
  type: ActionTypes.SET_TODO_STATE;
  payload: { state: State };
}

export function addTodo(name: string): AddTodoAction {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
        id: new Date().getTime(),
        name: name,
        done: false,
        date: new Date().getTime()
      }
    }
  };
}

export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload: { id }
  };
}

export function deleteTodo(id: number): DeleteTodoAction {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: { id }
  };
}

export function clearTodo(): ClearTodoAction {
  return {
    type: ActionTypes.CLEAR_TODO
  };
}

export function setState(state: State): SetTodoStateAction {
  return {
    type: ActionTypes.SET_TODO_STATE,
    payload: { state }
  };
}

export type Action =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction
  | ClearTodoAction
  | SetTodoStateAction;
