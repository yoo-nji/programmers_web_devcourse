{
  //타입 단언
  //타입스크립트한테 개발자가 타입을 알려주는 기능
  //타입스크립트 엔진보다 내가 더 타입을 잘 알고 있을 때

  //타입가드(자바스크립트 문법 이용) -> 타입을 좁혀주기 위해서 사용
  //어떻게? 런타밈에 타입을 확인해주는 원리
  let value: unknown = "hi";
  if (typeof value === "string") value.toUpperCase();
}
{
  //✅ 타입단언(타입스크립트 문법 이용)
  //정적인 상태에서 검사를 하게 됨
  //1. <>
  //이 방법은 거의 안 쓰고 대부분 as 이용
  let value: string = "hi";
  (<string>value).toUpperCase();

  //2. as
  (value as string).toUpperCase();
  //⚠️ 주의: 이 타입 단언을 하면서 발생하는 모든 에러는 개발자가 책임진다
}

{
  //언제 사용하는가? 별도의 api를 사용할 때 많이 사용함
  //⭐️ WEB API를 사용했을 때, 타입을 제대로 추론하지 못하는 경우
  //남발하면 안 됨
  const button = document.getElementById("button");
  // button.click(); //❌ 에러 발생
  //방법1
  //타입단언 as
  (button as HTMLElement).click(); //✅ 해결

  //✅ 방법2
  //옵셔널 체이닝 연산자(자바스크립트) 이용
  button?.click(); //버튼에 클릭이라는 메서드가 있으면 사용하게 해 줘

  //✅ 방법3
  //널 아님 보장 연산자(타입스크립트)
  button!.click();
}

{
  //널 병합 연산자
  //변수나 표현식이 null or undefined일 때 대체값을 제공하는 방법
  let foo: string | null = null;
  //널 병합 연산자는 null or undefined만 체크함
  let foo2 = foo ?? "default value"; //null, undefined

  //논리연산자
  //좀 더 포괄적임
  let foo3 = foo || "default vlaue2"; //falsy

  console.log(foo2);
  console.log(foo3);
}

{
  //옵셔널체이닝 활용
  function printUser(user: { name: string; age?: number } | null) {
    // console.log(user.name); //❌ 에러: 값이 null일 수도 있음
    console.log(user?.name); //✅ 해결: 옵셔널체이닝
  }

  let user: { name: string; age?: number } | null = { name: "james" };
  printUser(user);
}
