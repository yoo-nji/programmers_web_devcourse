//인터섹션(&) / AND 연사
//여러개의 타입을 모두 만족하게 하고 싶을 때 사용
//객체에서 활용
{
  //최소 2개
  let value: { name: string } & { age: number } = {
    name: "Alice",
    age: 30,
  };

  //뭐야 저렇게 할 거면 아래 코드랑 같은 거 아님??
  let value2: { name: string; age: number } = {
    name: "Alice",
    age: 30,
  };

  //강사님: 맞습니다 똑같아요
  //추후 타입별칭, 인터페이스와 같은 추가적인 문법을 배우면 의미가 있어지게 됨
}
//결합할 수 있는 건 any, never
//인터섹션 타입은 any와 결합하면 any로 평가된다
{
  let value: any & { name: string } = {
    name: "Alice",
    age: 30,
  };
}

// 인터섹션 타입이 never 타입과 결합하면 never로 평가된다
//naver은 반환값이 없다는 뜻
{
  let value: never & { name: string };
}
