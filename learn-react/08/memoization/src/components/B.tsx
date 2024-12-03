import React, { useState } from "react";
import C from "./C";

export default React.memo(function B({
  count2,
  increment,
}: {
  count2: number;
  increment: () => void;
}) {
  const [count, setCount] = useState(count2);
  console.log("B Rendering", count2);

  return (
    <>
      <h1>B: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <C />
    </>
  );
});
