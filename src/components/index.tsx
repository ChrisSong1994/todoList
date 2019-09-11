import * as React from "react";
import "./index.less";
import { Header } from "./Header";

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <section className="todo">
        <Header />
      </section>
    );
  }
}
