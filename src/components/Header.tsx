import * as React from "react";

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header className="header">
        <h1>todoList</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
        <label className="toggle-btn"></label>
      </header>
    );
  }
}

export default Header;
