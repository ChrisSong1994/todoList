import * as React from "react";
import { StateContext } from '../store';
import { Todo } from '../type';

interface Props {
 
}
interface States {}

class Content extends React.Component<Props, States> {
  static contextType = StateContext;

  constructor(props: Props) {
    super(props);
  }

  handleToggle(id: number) {
    this.context.onToggleTodo(id);
  }

  handleDelete(id: number) {
    this.context.onDeleteTodo(id);
  }

  handleFilterTodoList() {
    const { selectedKey, todoList } = this.context;
    switch (selectedKey) {
      case "All": {
        return todoList;
      }
      case "Active": {
        return todoList.filter((item: Todo) => !item.done);
      }
      case "Completed": {
        return todoList.filter((item: Todo) => item.done);
      }
      default:
        return todoList;
    }
  }

  render() {
    const todoList = this.handleFilterTodoList();
    return (
      <section className="main">
        <ul className="todo-list">
          {todoList.map((todo: Todo) => {
            return (
              <li className={todo["done"] ? "completed" : ""} key={todo["id"]}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={todo["done"] ? true : false}
                    onClick={() => {
                      this.handleToggle(todo["id"]);
                    }}
                  />
                  <label>{todo["name"]}</label>
                  <button
                    className="destroy"
                    onClick={() => {
                      this.handleDelete(todo["id"]);
                    }}
                  ></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}


export default Content;
