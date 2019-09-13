import { Todo, ActionTypes, Action } from "../action";

export interface State {
  todoList: Todo[];
}

export const initialState: State = {
  todoList: []
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      const todo = action.payload.todo;
      return {
        ...state,
        todoList: [...state.todoList, todo]
      };
    }
    case ActionTypes.DELETE_TODO: {
      const id = action.payload.id;
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== id)
      };
    }
    case ActionTypes.TOGGLE_TODO: {
      const id = action.payload.id;
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === id) {
            todo.done = !todo.done;
          }
          return todo;
        })
      };
    }
    default:
      return state;
  }
}


