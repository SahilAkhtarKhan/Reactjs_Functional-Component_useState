import React from "react";
import ReactDOM from "react";
import Child from "./button";
import { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    return setCount(count + 1);
  }

  return (
    <>
      <button onClick={increaseCount}>Parent</button>
      <p>Count : {count}</p>
      <Child count={count} setcount={setCount} />
    </>
  );
}

export default Parent;
