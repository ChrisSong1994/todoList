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
      selectedKey: "All"
    };
  }

  handleSelectedKey(key: string) {
    this.setState({ selectedKey: key });
  }

  render() {
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
}
