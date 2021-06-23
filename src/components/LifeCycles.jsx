import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
      lifeCycles: [
        "componentDidMount",
        "componentDidUpdate",
        "componentWillUnmount",
      ],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  click() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    return (
      <div>
        <hr />

        <h3>Ciclos de vida</h3>

        <hr />

        <ul>
          {this.state.lifeCycles.map((lifeCycle) => (
            <li key={lifeCycle}>{lifeCycle}</li>
          ))}
        </ul>

        <p>Clicks: {this.state.clicks}</p>

        <button onClick={() => this.click()}>Launch update</button>
      </div>
    );
  }
}
export default LifeCycle;
