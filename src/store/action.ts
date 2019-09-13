export interface Todo {
  id: number;
  name: string;
  done: boolean;
  date: number;
}

export enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO"
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

export type Action = AddTodoAction | ToggleTodoAction | DeleteTodoAction;
