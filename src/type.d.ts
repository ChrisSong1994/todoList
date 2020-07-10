export interface Todo {
    id: number;
    name: string;
    done: boolean;
    date: number;
  }
  

export interface State {
    todoList: Todo[];
  }