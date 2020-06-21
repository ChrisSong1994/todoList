import * as React from "react";
import { connect } from "react-redux";
import { State } from "../store/reducer/todoList";
import { deleteTodo, toggleTodo, Todo } from "../store/action";

interface Props {
  onDeleteTodo?: (id: number) => any;
  onToggleTodo?: (id: number) => any;
  todo?: { todoList: [] };
  selectedKey?: string;
}
interface States {}

class Content extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  handleToggle(id: number) {
    this.props.onToggleTodo(id);
  }

  handleDelete(id: number) {
    this.props.onDeleteTodo(id);
  }

  handleFilterTodoList() {
    const { selectedKey, todo } = this.props;
    switch (selectedKey) {
      case "All": {
        return todo.todoList;
      }
      case "Active": {
        return todo.todoList.filter((item: Todo) => !item.done);
      }
      case "Completed": {
        return todo.todoList.filter((item: Todo) => item.done);
      }
      default:
        return todo.todoList;
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

const mapStateToProps = (state: State) => ({
  todo: state.todoList,
});

const mapDispatchToProps = {
  onDeleteTodo: deleteTodo,
  onToggleTodo: toggleTodo,
};

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(Content);
