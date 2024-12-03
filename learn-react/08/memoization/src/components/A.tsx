import { useState } from "react";
import B from "./B";

export default function A() {
  console.log("A Rendering");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <h1>
        A: {count} / {count2}
      </h1>
      <button onClick={increment}>증가1</button>
      <button onClick={() => setCount2((count) => count + 1)}>증가2</button>
      <B count2={count2} increment={increment} />
    </>
  );
}
