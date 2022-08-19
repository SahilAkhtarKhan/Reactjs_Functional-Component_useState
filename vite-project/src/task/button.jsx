import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Child({ count }) {
  const [childCount, setChildCount] = useState(count);
  function increaseCount2() {
    setChildCount(childCount + 1);
  }
  useEffect(() => {
    const currentVal = count === 0 ? 0 : childCount + 1;
    setChildCount(currentVal);
  }, [count]);
  return (
    <>
      <button onClick={increaseCount2}>Child</button>
      <p>Child count: {childCount}</p>
    </>
  );
}
export default Child;
