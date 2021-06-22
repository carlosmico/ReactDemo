import React from "react";
import Counter from "./Counter";

export default class Refs extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef);
  }

  setFocusAndTypeHello = () => {
    this.myRef.current.focus();
    this.myRef.current.value = "Hello";
  };

  render() {
    return (
      <div>
        <Counter />
        <p>Elemento con referencia</p>
        <input ref={this.myRef} placeholder="Input con referencia" />
        <button onClick={this.setFocusAndTypeHello}> Saluda</button>
      </div>
    );
  }
}
