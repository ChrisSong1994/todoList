import * as React from "react";
import { connect } from "react-redux";
import { State } from "../store/reducer";
import { deleteTodo, toggleTodo, Todo } from "../store/action";

interface Props {
  onDeleteTodo?: (id: number) => any;
  onToggleTodo?: (id: number) => any;
  todo?: { todoList: [] };
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

  render() {
    const { todoList } = this.props.todo;
    return (
      <section className="main">
        <ul className="todo-list">
          {todoList.map((todo: Todo) => {
            return (
              <li className={todo["done"] ? "completed" : ""}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
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
  todo: state.todoList
});

const mapDispatchToProps = {
  onDeleteTodo: deleteTodo,
  onToggleTodo: toggleTodo
};

export default connect<any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Content);
