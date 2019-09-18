import * as React from "react";
import { connect } from "react-redux";
import { State } from "../store/reducer/todoList";
import { addTodo, setState } from "../store/action";

interface Props {
  onAddTodo?: (value: string) => any;
  onSetState?: (state: State) => any;
}
interface States {
  value: string;
}

class Header extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    if (window.localStorage.getItem("todo")) {
      this.props.onSetState(JSON.parse(window.localStorage.getItem("todo")));
    }
  }

  handleChange(value: string) {
    this.setState({ value });
  }

  handleOnEnter(e: any) {
    if (e.key === "Enter") {
      this.props.onAddTodo(this.state.value);
      this.setState({ value: "" });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <header className="header">
        <h1>todoList</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={e => this.handleChange(e.target.value)}
          onKeyDown={e => {
            this.handleOnEnter(e);
          }}
        />
        <label className="toggle-btn"></label>
      </header>
    );
  }
}

const mapStateToProps = (state: State) => ({
  todo: state.todoList
});

const mapDispatchToProps = {
  onAddTodo: addTodo,
  onSetState: setState
};

export default connect<any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Header);
