import { useState } from "react";
import { CounterContext } from "../CounterContext"; // CounterContext import 확인

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  //value는 하나의 값만 전달할 수 있기 때문에 객체로 묶어서 전달하기
  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
        reset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
