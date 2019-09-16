import * as React from "react";
import { connect } from "react-redux";
import { State } from "../store/reducer/todoList";
import { clearTodo, selectedKey, Todo } from "../store/action";

interface Props {
  onClearTodo?: () => any;
  onSelectedKey?: (key: string) => any;
  todo?: { todoList: []; selectKey: string };
}
interface States {
  todoList?: [];
  selectKey?: string;
}

class Footer extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectKey: "All",
      todoList: []
    };
  }

  handleSelected(key: string) {
    this.props.onSelectedKey(key);
    switch (key) {
      case "All": {
        this.setState({ todoList: this.props.todo.todoList, selectKey: key });
        break;
      }
      case "Active":
        {
          const todoList = this.props.todo.todoList.filter(
            (item: Todo) => !item.done
          );
          this.setState({ todoList, selectKey: key });
        }
        break;
      case "Completed":
        {
          const todoList = this.props.todo.todoList.filter(
            (item: Todo) => item.done
          );
          this.setState({ todoList, selectKey: key });
        }
        break;
      default: {
        this.setState({ todoList: this.props.todo.todoList });
      }
    }
  }

  handleFilterTodoList() {}

  render() {
    const todoList = this.state.todoList;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>1</strong>
          <span> </span>
          <span>item</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            <a
              href="javascript:void(0)"
              className="selected"
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
              className=""
              onClick={() => {
                this.handleSelected("All");
              }}
            >
              Active
            </a>
          </li>

          <li>
            <a
              href="javascript:void(0)"
              className=""
              onClick={() => {
                this.handleSelected("All");
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
