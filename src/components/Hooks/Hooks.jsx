import { useState } from "react";
import "./Hooks.scss";

const Hooks = () => {
  const [count, setCount] = useState(0);

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
