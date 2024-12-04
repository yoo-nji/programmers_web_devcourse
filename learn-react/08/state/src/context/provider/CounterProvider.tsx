import { CounterContext } from "../CounterContext";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. Context provider를 만든다
  return (
    <>
      <CounterContext.Provider value={null}>{children}</CounterContext.Provider>
    </>
  );
}
