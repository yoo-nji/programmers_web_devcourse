import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Count Rendering");

  //   setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);

  //   return () => {
  //     console.log("Count Unmount");
  //   };
  // }, []);

  //컴포넌트가 렌더링 될 때 실행되는 거 막으려면
  useEffect(() => {
    if (count > 0) console.log("count updated:" + count);
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>상태 증가</button>
    </>
  );
}
