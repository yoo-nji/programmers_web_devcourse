// 폼 제어
// 제어 컨트롤러 -> 실시간 o
// 상태를 정의해서 폼 요소를 제어
// ex) 글자수세기

import { useRef } from "react";

// 비제어 컨트롤러 -> 실시간 x
// DOM을 직접 참조해서 폼 요소를 제어
// useRef
export default function App() {
  // document.querySelector()
  const idRef = useRef<HTMLInputElement | null>(null); // ref 객체
  const pwRef = useRef<HTMLInputElement | null>(null); // ref 객체
  const checkboxRef = useRef<HTMLInputElement | null>(null); // ref 객체
  const radioRef = useRef<HTMLInputElement[]>([]); // ref 객체

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(idRef.current?.value);
    // console.log(pwRef.current?.value);
    // console.log(checkboxRef.current?.checked);
    const selectedRadio = radioRef.current.find((radio) => radio.checked);
    console.log(selectedRadio?.value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" ref={idRef} placeholder="아이디를 입력해주세요" />
        <input type="password" ref={pwRef} placeholder="비밀번호를 입력해주세요" />
        <input type="checkbox" ref={checkboxRef} />
        {/*  */}
        <input
          type="radio"
          name="gender"
          ref={(el) => {
            if (el) radioRef.current[0] = el;
          }}
          value="male"
          defaultChecked
        />{" "}
        male
        <input
          type="radio"
          name="gender"
          ref={(el) => {
            if (el) radioRef.current[1] = el;
          }}
          value="female"
        />{" "}
        female
        {/*  */}
        <button>로그인</button>
      </form>
    </>
  );
}
