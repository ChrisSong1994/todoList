import * as React from "react";
import "./index.less";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <section className="todo">
        <Header />
        <Content />
        <Footer />
      </section>
    );
  }
}
