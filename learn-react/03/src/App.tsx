import { twMerge } from "tailwind-merge";

export default function App() {
  return (
    <>
      {/* 스타일충돌 */}
      {/* <h1 className="text-3xl underline text-2xl">App</h1> */}
      <h1 className={twMerge("text-3xl", "underline", "text-2xl")}>App</h1>
    </>
  );
}
