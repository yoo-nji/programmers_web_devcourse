import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  let count2 = 0;
  //useEffect(콜백함수, 의존성배열)

  //✅ 생성
  //의존성 배열이 바뀔 때 호출됨. 즉, 이렇게 비워두면 컴포넌트 생성시 한 번만 실행하겠다는 뜻
  useEffect(() => {
    //컴포넌트가 생성되면 하고 싶은 로직
    //보통 api 호출을 함
    console.log("App Created");

    const interval = setInterval(() => {
      count2 += 1;
      console.log("interval!!");
    }, 1000);

    //삭제될 때 호출됨
    return () => {
      console.log("Count Destroyed");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    //useEffect는 무조건 한 번 호출되기 떄문에 처음에 호출 안 하려면 이렇게
    if (count > 0) console.log("count updated:" + count);
  }, [count]);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>상태 증가</button>
    </>
  );
}
