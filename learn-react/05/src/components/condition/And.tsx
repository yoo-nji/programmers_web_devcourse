import { twMerge } from "tailwind-merge";
import Login from "../Login";
// 내가 true일 때만 렌더링하고 싶을 때 사용
// flase는 신경 안 쓰고 싶다! 하면 이렇게
export default function And() {
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn && <Login />}

      {/* 클래스네임 조건부 */}
      {/* style로는 불가능 */}
      <h1 className={twMerge(isLoggedIn && "text-rose-600")}>hello</h1>
    </>
  );
}
