import { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    //이전값을 참조할 필요가 없어서 콜백함수를 쓰지 않음
  };
  return (
    <>
      <h1>{input}</h1>
      <input type="text" value={input} onChange={changeHandler} />
      {/* value 값을 안 넣어주면 리셋 기능을 넣어서 리셋을 해 줘도 인풋 내에 있는 건 제어가 안 됨 => value 값을 제어하고 있지 않기 때문에
      즉 value와 onChange가 세트다. 그래야 폼을 온전한 제어를 할 수 있다 */}
    </>
  );
}
