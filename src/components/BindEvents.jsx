import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    console.log("Bind events props -> ", props);

    this.state = {};
  }

  click() {
    console.log("Button clicked", this, this.state);
  }

  render() {
    return (
      <div>
        <h3>Bind eventos</h3>

        <hr />

        <button onClick={this.click.bind(this)}>Click</button>
      </div>
    );
  }
}
export default Counter;
