import * as React from "react";

class Content extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>sasasssasasssasasssasass</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li className="">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>sasass</label>
              <button className="destroy"></button>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Content;
