import { useEffect } from "react";

export default function Count() {
  //useEffect(콜백함수, 의존성배열)

  //✅ 생성
  //의존성 배열이 바뀔 때 호출됨. 즉, 이렇게 비워두면 컴포넌트 생성시 한 번만 실행하겠다는 뜻
  useEffect(() => {
    //컴포넌트가 생성되면 하고 싶은 로직
    //보통 api 호출을 함
    console.log("App Created");

    //삭제될 때 호출됨
    return () => {
      console.log("Count Destroyed");
    };
  }, []);
  return (
    <>
      <h1>Count</h1>
    </>
  );
}
