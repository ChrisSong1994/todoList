import * as React from 'react';
import { Todo } from '../type';
import { StateContext } from '../store';
interface Props {
  
}
interface States {}

class Footer extends React.Component<Props, States> {
  static contextType = StateContext;
  constructor(props: Props) {
    super(props);
  }

  handleSelected(key: string) {
    this.context.onSelectedKey(key);
  }

  render() {
    const activeTodoList = this.context.todoList.filter((item: Todo) => !item.done);
    const selectedKey = this.context.selectedKey;
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
              className={selectedKey === 'All' ? 'selected' : ''}
              onClick={() => {
                this.handleSelected('All');
              }}
            >
              All
            </a>
          </li>
          <span> </span>
          <li>
            <a
              href="javascript:void(0)"
              className={selectedKey === 'Active' ? 'selected' : ''}
              onClick={() => {
                this.handleSelected('Active');
              }}
            >
              Active
            </a>
          </li>

          <li>
            <a
              href="javascript:void(0)"
              className={selectedKey === 'Completed' ? 'selected' : ''}
              onClick={() => {
                this.handleSelected('Completed');
              }}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={() => {
            this.context.onClearTodo();
          }}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
