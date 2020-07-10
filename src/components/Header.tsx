import * as React from 'react';
import { StateContext } from '../store';

interface States {
  value: string;
}

class Header extends React.Component<any, States> {
  static contextType = StateContext;

  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    console.log(this.context);
  }

  handleChange(value: string) {
    this.setState({ value });
  }

  handleOnEnter(e: any) {
    if (e.key === 'Enter') {
      this.context.onInput(this.state.value);
      this.setState({ value: '' });
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
          onChange={(e) => this.handleChange(e.target.value)}
          onKeyDown={(e) => {
            this.handleOnEnter(e);
          }}
        />
        <label className="toggle-btn"></label>
      </header>
    );
  }
}

export default Header;
