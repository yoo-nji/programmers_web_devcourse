//제네릭
//기본원리: 값을 >> 치환 <<
//사용이유: 코드의 재사용성 증가
//특정 값의 타입이 여러개일 때 유용

//타입별칭, 인터페이스, 함수, Class 에서 사용 가능
//제네릭제약, <T extends [제약조건]>

//인터페이스 + 제네릭
{
  interface Car<T> {
    name: string;
    color: string;
    option: T;
  }

  let car: Car<null> = {
    name: "Tesla",
    color: "Red",
    option: null,
  };

  let car2: Car<{ giftcard: boolean }> = {
    name: "Tesla",
    color: "Red",
    option: { giftcard: true },
  };
}

//함수 + 제네릭
//인터페이스, 타입별칭 제네릭과의 차이점
//✅ 함수제네릭은 >> 타입추론 << 이 가능하다
{
  function printValue<T>(value: T): T {
    return value;
  }

  printValue<string>("hello");
  printValue<number>(10);
}

{
  // 1. 함수 선언식 + 제네릭
  // 제네릭 타입 <T>를 사용하여 배열의 첫 번째 요소를 반환하는 함수 선언
  function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  console.log(getFirstElement<number>([1, 2, 4]));
}

{
  // 2. 함수 표현식 + 제네릭
  // 함수 표현식 방식으로 동일한 기능을 구현
  const getFirstElement = function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  };
}

{
  // 3. 함수 표현식 + 타입 선언
  // 함수의 타입을 미리 선언하여 제네릭 함수 표현식을 명시적으로 작성
  const getFirstElement: <T>(arr: T[]) => T = function getFirstElement(arr) {
    return arr[0];
  };
}

{
  // 4. 화살표 함수 + 타입 선언
  // 화살표 함수로 간결하게 작성하며 함수 타입 선언 포함
  const getFirstElement: <T>(arr: T[]) => T = (arr) => arr[0];
}
{
  // 타입 정의를 통해 함수 타입을 지정
  type FirstFunc = <T>(arr: T[]) => T;
  const getFirstElement: FirstFunc = function getFirstElement(arr) {
    return arr[0];
  };
}
{
  // 인터페이스를 통해 함수 타입을 지정
  interface FirstFunc {
    <T>(arr: T[]): T;
  }
  const getFirstElement: FirstFunc = (arr) => arr[0];
}

//<>에 값을 두 개 넣어줄 수 있음
{
  function mergObject<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  console.log(
    mergObject<{ name: string }, { age: number }>({ name: "james" }, { age: 10 }) //함수는 타입추론이 돼서 적어주지 않아도 됨
  );
  console.log(mergObject<{ name: string }, { gender: string }>({ name: "james" }, { gender: "male" }));
}

//📌 심화문법
// ✅ 제네릭 제약 문법
//제네릭은 코드의 재사용성을 높여주지만 너무 폭넓은 재사용성으로 문제가 되는 경우도 있음
//제약을 걸 땐 <> 여기 안에 제약을 추가한다
{
  //만약 boolean이 안 들어오게 하고 싶다면?
  //T extends U ? X : Y

  function getFirstElement<T extends number | string>(arr: T[]): T {
    return arr[0];
  }
  console.log(getFirstElement<number>([1, 2, 4]));
  console.log(getFirstElement<string>(["hello"]));
  // console.log(getFirstElement<boolean>([true, false])); // ❌ 에러
}

{
  // getElementsLength 함수: 길이를 반환하는 함수
  // 조건: 입력값은 { length: number } 속성을 반드시 가져야 함
  function getElementsLength<T extends { length: number }>(value: T): number {
    return value.length;
  }

  console.log(getElementsLength("hello")); // 5
  console.log(getElementsLength([1, 2, 3])); // 3

  // console.log(getElementsLength(10)); // 오류 발생
}

{
  // printUserInfo 함수: Nameable과 Ageable 속성을 모두 가진 객체의 정보를 출력
  // 조건: 입력 객체는 반드시 name과 age 속성을 가져야 함

  type Nameable = { name: string };
  type Ageable = { age: number };

  // 함수 정의: Nameable & Ageable 타입을 만족하는 객체를 인자로 받음
  //제네릭으로 필수, 제약 타입을 지정할 수 있음(유니온이랑 차이)
  function printUserInfo<T extends Nameable & Ageable>(user: T): void {
    console.log(`${user.name}, ${user.age}`);
  }

  printUserInfo({ name: "james", age: 10 }); // 출력: james, 10
}

{
  // getProperty 함수: 객체와 속성 키를 받아 해당 속성 값을 반환
  // 조건: obj는 객체여야 하고, key는 obj의 속성 중 하나여야 함
  //keyof: 객체의 키를 추출해서 유니온으로 반환
  function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  // 함수 호출: 객체 { name: "james" }에서 "name" 속성 값을 가져옴
  //K extends "name"
  console.log(getProperty({ name: "james" }, "name")); // 출력: james
}
