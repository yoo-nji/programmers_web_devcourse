import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext"; // CounterContext import 확인

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  const memo = useMemo(() => ({ increment, decrement, reset }), []);

  //value는 하나의 값만 전달할 수 있기 때문에 객체로 묶어서 전달하기
  return (
    <CounterActionContext.Provider value={memo}>
      <CounterContext.Provider value={{ count }}>
        {children}
      </CounterContext.Provider>
    </CounterActionContext.Provider>
  );
}
