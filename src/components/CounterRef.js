import React, { useRef } from "react";

function CounterRef() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current += 1
    console.log({countRef});
  }

  return (
    <div>
      <h1>CounterRef</h1>
      <button onClick={handleClick}>{countRef.current}</button>
    </div>
  );
}

export default CounterRef;
