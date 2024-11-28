import { twMerge } from "tailwind-merge";
import Login from "../Login";
import Logout from "../Logout";

export default function Ternary() {
  const isLoggedIn = false;
  return (
    <>
      {/* 1 */}
      <h1>{isLoggedIn ? "로그인 되었습니다" : "로그인 되지 않았습니다"}</h1>
      {/* 2: jsx요소로 조건처리*/}
      {isLoggedIn ? <h1>로그인 되었습니다</h1> : <h1>로그인 되지 않았습니다</h1>}
      {/* 3: 컴포넌트 렌더링*/}
      {isLoggedIn ? <Login /> : <Logout />}
      {/* 4: 인라인 스타일에서 조건부 색상 지정 */}
      <h1 style={{ color: isLoggedIn ? "red" : "blue" }}>로그인</h1>
      {/* 5: 클래스 이름으로 조건처리 */}
      <h1 className={`${isLoggedIn ? "text-rose-400" : "text-green-600"}`}>로그인</h1>
      {/* 6: 테일윈드 머지 사용 */}
      <h1 className={twMerge(isLoggedIn ? "text-rose-400" : "text-gray-500")}>로그인</h1>
    </>
  );
}
