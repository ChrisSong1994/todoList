import { Todo, ActionTypes, Action } from "../action";

export interface State {
  todoList: Todo[];
}

export const initialState: State = {
  todoList: []
};

export function reducer(state: State = initialState, action: Action) {
  let newState: State = state;
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      const todo = action.payload.todo;
      newState = {
        ...state,
        todoList: [...state.todoList, todo]
      };
      window.localStorage.setItem("todo", JSON.stringify(newState));
      return newState;
    }
    case ActionTypes.DELETE_TODO: {
      const id = action.payload.id;
      newState = {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== id)
      };
      window.localStorage.setItem("todo", JSON.stringify(newState));
      return newState;
    }
    case ActionTypes.TOGGLE_TODO: {
      const id = action.payload.id;
      newState = {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === id) {
            todo.done = !todo.done;
          }
          return todo;
        })
      };
      window.localStorage.setItem("todo", JSON.stringify(newState));
      return newState;
    }
    case ActionTypes.SET_TODO_STATE: {
      const state = action.payload.state;
      newState = state;
      window.localStorage.setItem("todo", JSON.stringify(newState));
      return newState;
    }
    case ActionTypes.CLEAR_TODO: {
      newState = {
        ...state,
        todoList: []
      };
      window.localStorage.setItem("todo", JSON.stringify(newState));
      return newState;
    }
    default:
      return newState;
  }
}
