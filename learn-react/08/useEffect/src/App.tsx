//useEffect
//함수형 컴포넌트에서 생명주기를 다룰 때 사용하는 리액트 훅
//생명주기 => 컴포넌트가 렌더링 되고 화면에서 사라질 때까지

import { useState } from "react";
import Count from "./components/Count";

//리액트 생명주기: 생성, 수정, 삭제
export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow && <Count />}
      <button onClick={() => setIsShow(!isShow)}>체인지</button>
    </>
  );
}
