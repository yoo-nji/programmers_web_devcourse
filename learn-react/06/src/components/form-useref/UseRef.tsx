import { useRef } from "react";

export default function UseRef() {
  const idRef = useRef<HTMLInputElement | null>(null); //ref객체 반환
  const pwRef = useRef<HTMLInputElement | null>(null);
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const radioRef = useRef<HTMLInputElement[]>([]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(idRef.current?.value);
    // console.log(idRef.current);
    // console.log(checkboxRef.current?.checked);
    //💡 선택된 라이오 버튼 찾기
    const selectedRadio = radioRef.current.find((radio) => radio.checked);
    console.log(selectedRadio?.value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" ref={idRef} placeholder="아이디를 입력해 주세요" />
        <input
          type="password"
          ref={pwRef}
          placeholder="비밀번호를 입력해 주세요"
        />
        <input type="checkbox" ref={checkboxRef} />
        {/* 라디오는 좀 까다로움 */}
        <input
          type="radio"
          ref={(el) => {
            if (el) radioRef.current[0] = el;
          }}
          name="gender"
          value="female"
          defaultChecked
        />
        female
        <input
          type="radio"
          ref={(el) => {
            if (el) radioRef.current[1] = el;
          }}
          name="gender"
          value="male"
        />
        male
        <button>로그인</button>
      </form>
    </>
  );
}
