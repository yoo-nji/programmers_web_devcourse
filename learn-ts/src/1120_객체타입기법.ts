{
  const user: {
    //✅ 1. readonly(객체, 변수 키워드)
    // 속성을 읽기 전용으로 변경
    readonly name: string;
    age: number;
    gender?: string; // ?옵셔널 연산자를 붙이면  string | undefined 이거랑 똑같음
  } = {
    name: "Alice",
    age: 30,
  };

  // user.name = "Alice";
  //❌ 읽기전용이라 다른 값 할당 불가

  //배열이나 튜플에서도 읽기 전용으로 바꿀 수 있음
  //=> 변수를 >>상수로<< 완전히 바꿈
  const arr: readonly number[] = [1, 2, 3];
  // arr[0] = 10;
  //❌ 상수로 바뀌어서 다른 값 할당 불가
}
//✅ 2. 인덱스 시그니처
{
  const user: {
    //키와 값이 다 같은 타입을 땐 인덱스 시그니처 기법을 사용해 줄 수 있음
    [key: string]: string;
  } = {
    name: "John",
    gender: "Male",
    address: "seoul",
  };
}
//만약 다른타입을 추가한다면? 유니온으로!
{
  const user: {
    [key: string]: string | number;
  } = {
    name: "John",
    age: 20,
    gender: "Male",
    address: "seoul",
  };
}
