import React, { Component } from "react";

const initialState = { count: 1, name: "Nombre", surname: "Apellidos" };

class Counter extends Component {
  constructor(props) {
    super(props);

    console.log("Counter props -> ", props);

    const history = props.history;

    if (history) {
      history.block((location, action) => {
        if (true) return "Quieres salir?";
      });
    }

    this.state = initialState;
  }

  increment() {
    this.setState({ count: this.state.count + this.props.incValue });
  }

  showName() {
    this.setState({ name: "Carlos", surname: "Micó" });
  }

  cleanState() {
    this.setState(initialState);
  }

  render() {
    return (
      <div>
        <h3>Contador Kata 1 y 2</h3>

        <hr />

        <div>{this.state.count}</div>

        <button onClick={() => this.increment()}>Incrementar</button>
        <button onClick={() => this.showName()}>Ver nombre</button>

        <button onClick={this.cleanState.bind(this)}>Clean state</button>

        <span>{this.state.name + " - " + this.state.surname}</span>
      </div>
    );
  }
}
export default Counter;
