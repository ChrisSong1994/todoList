import * as React from "react";
import "./index.less";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

interface Props {}
interface States {
  selectedKey: string;
}
export class App extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedKey: "All",
    };
  }

  handleSelectedKey(key: string) {
    this.setState(
      () => {
        debugger;
        return { selectedKey: key };
      },
      () => {
        debugger;
        console.log(this.state.selectedKey);
      }
    );
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    debugger;
    console.log("getDerivedStateFromProps", nextProps, prevState);
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    debugger;
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    debugger;
    const { selectedKey } = this.state;
    return (
      <section className="todo">
        <Header />
        <Content selectedKey={selectedKey} />
        <Footer
          onSelectedKey={this.handleSelectedKey.bind(this)}
          selectedKey={selectedKey}
        />
      </section>
    );
  }

  componentDidMount() {
    debugger;
    console.log("componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    debugger;
    console.log("getSnapshotBeforeUpdate", prevState, prevProps);
    return "getSnapshotBeforeUpdate";
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    debugger;
    console.log("componentDidUpdate", prevState, prevProps, snapshot);
  }

  componentWillUnmount() {
    debugger;
    console.log("componentWillUnmount");
  }
}
