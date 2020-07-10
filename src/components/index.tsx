import * as React from 'react';
import './index.less';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { State } from '../type';
import { StateContext } from '../store';

interface Props {}
interface States extends State {
  selectedKey: string;
  onInput: (value: string) => void;
  onSelectedKey: (key: string) => void;
  onClearTodo: () => void;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}
export class App extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todoList: [],
      selectedKey: 'All',
      onInput: this.handInput,
      onSelectedKey: this.handleSelectedKey,
      onClearTodo: this.handleClearTodo,
      onToggleTodo: this.handleToggle,
      onDeleteTodo: this.handleDelete,
    };
  }

  handleToggle = (id: number) => {
    const todoList = this.state.todoList.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({ todoList });
  };

  handleDelete = (id: number) => {
    const todoList = this.state.todoList.filter((todo) => todo.id !== id);
    this.setState({ todoList });
  };

  handleSelectedKey = (key: string) => {
    this.setState({ selectedKey: key });
  };

  handInput = (value: string) => {
    const todoList = this.state.todoList;
    todoList.push({ id: new Date().getTime(), name: value, done: false, date: new Date().getTime() });
    this.setState({ todoList });
  };

  handleClearTodo = () => {
    this.setState({ todoList: [] });
  };

  render() {
    return (
      <StateContext.Provider value={this.state}>
        <section className="todo">
          <Header />
          <Content />
          <Footer />
        </section>
      </StateContext.Provider>
    );
  }
}
