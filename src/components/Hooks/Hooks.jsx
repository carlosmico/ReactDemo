import { useState, useEffect } from "react";
import "./Hooks.scss";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  let number = 1;

  //Mount or Update
  useEffect(() => console.log("Mounted or updated"));

  //Mount
  useEffect(() => {
    console.log("Mounted");
    setTimeout(() => setText("Hola"), 3000);
    setTimeout(() => (number = 34), 2000);
  }, []);

  //Update count
  useEffect(() => {
    console.log("Count updated: ", count);
  }, [count]);

  //Update text
  useEffect(() => {
    console.log("Text updated: ", text);
  }, [text]);

  //Update count or text
  useEffect(() => {
    console.log("Count or text updated");
  }, [count, text]);

  //Update common var
  useEffect(() => {
    console.log("Common var updated: ", number);
  }, [number]);

  const updateCount = (operation) => {
    const num = 1;

    if (operation === "-") {
      return setCount(count - num);
    }

    setCount(count + num);
  };

  return (
    <div className="hooks-container">
      <p>{count}</p>

      <div className="buttoner">
        <button onClick={() => updateCount("-")}>-</button>

        <button onClick={() => updateCount("+")}>+</button>

        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};
export default Hooks;
