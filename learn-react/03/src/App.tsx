import { twMerge } from "tailwind-merge";

export default function App() {
  return (
    <>
      {/* 스타일충돌 */}
      {/* <h1 className="text-3xl underline text-2xl">App</h1> */}
      <h1 className={twMerge("text-3xl", "underline", "text-2xl sedgwick")}>App</h1>
      <h1 className={twMerge("text-3xl", "underline", "text-2xl black")}>App</h1>
      <h2 className="bagelfatone text-3xl">빵폰트</h2>
      <h2 className="daldam text-3xl">제주돌담</h2>
      <input type="text" />
    </>
  );
}
