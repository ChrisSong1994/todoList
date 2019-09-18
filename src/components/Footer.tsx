import * as React from "react";
import { connect } from "react-redux";
import { State } from "../store/reducer/todoList";
import { clearTodo, Todo } from "../store/action";

interface Props {
  onClearTodo?: () => any;
  onSelectedKey?: (key: string) => any;
  todo?: { todoList: [] };
  selectedKey?: string;
}
interface States {}

class Footer extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  handleSelected(key: string) {
    this.props.onSelectedKey(key);
  }

  render() {
    const activeTodoList = this.props.todo.todoList.filter(
      (item: Todo) => !item.done
    );
    const selectedKey = this.props.selectedKey;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeTodoList.length}</strong>
          <span> </span>
          <span>item</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            <a
              href="javascript:void(0)"
              className={selectedKey === "All" ? "selected" : ""}
              onClick={() => {
                this.handleSelected("All");
              }}
            >
              All
            </a>
          </li>
          <span> </span>
          <li>
            <a
              href="javascript:void(0)"
              className={selectedKey === "Active" ? "selected" : ""}
              onClick={() => {
                this.handleSelected("Active");
              }}
            >
              Active
            </a>
          </li>

          <li>
            <a
              href="javascript:void(0)"
              className={selectedKey === "Completed" ? "selected" : ""}
              onClick={() => {
                this.handleSelected("Completed");
              }}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={() => {
            this.props.onClearTodo();
          }}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

const mapStateToProps = (state: State) => ({
  todo: state.todoList
});

const mapDispatchToProps = {
  onClearTodo: clearTodo
};

export default connect<any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
