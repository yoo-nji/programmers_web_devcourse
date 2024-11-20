//타입별칭 고급
//나만의 타입을 정의할 때 사용 type 키워드 사용
{
  //1. 기본적인 타입 별칭
  type ID = string | number;
  let id: ID = "a"; //ok
  id = 10; //ok

  //2. 객체 타입 별칭
  type User = {
    name: string;
    age: number;
  };
  //이렇게 사용
  const user: User = {
    name: "Alice",
    age: 30,
  };

  //3. 함수 타입 별칭
  type SumFunc = (n1: number, n2: number) => number;
  //함수표현식
  const sum: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  };
  //화살표 함수
  const sum2: SumFunc = (n1, n2) => {
    return n1 + n2;
  };

  //4. 재네릭 => 코드의 재사용성 증가
  //관용적인 지정 방법:
  //대문자이용 Type Univeral K(key) V(value)

  //option이 다 다를 때
  //이렇게 쓰면 되지만 가독성이 좋지 않음
  type Car = {
    name: string;
    color: string;
    option: null | string | { giftcard: boolean };
  };

  //👍 이렇게 해서 아래처럼 사용해 줄 수 있음
  type Car2<T> = {
    name: string;
    color: string;
    option: T;
  };

  const car: Car2<null> = {
    name: "Benz",
    color: "black",
    option: null,
  };

  const car2: Car2<string> = {
    name: "Benz",
    color: "black",
    option: "key",
  };

  const car3: Car2<{ giftcard: boolean }> = {
    name: "Benz",
    color: "black",
    option: {
      giftcard: true,
    },
  };

  //5. 튜플 타입 별칭
  type Point = [number, number];
  const point: Point = [10, 29];

  //6. 인터섹션 타입 별칭
  type Nameable = {
    name: string;
  };
  type Aageable = {
    age: number;
  };
  type Person = Nameable &
    Aageable & {
      gender?: string;
    };

  const person: Person = {
    name: "Alice",
    age: 30,
  };

  //7. 리터럴로도 타입 별칭 가능
  type Direction = "LEFT" | "RIGHT" | "UP" | "DOWN";

  const direction: Direction = "LEFT"; // 자동완성 지원

  //8. 조건부 타입 별칭
  //문법
  //T extends U ? X : Y
  type isString<T> = T extends string ? "yes" : "no";

  const test1: isString<string> = "yes";
  const test2: isString<number> = "no";

  //9. 키 선택 타입 별칭
  type Persons = {
    name: string;
    age: number;
    address: string;
  };

  type PersonKeys = keyof Persons; // "name" | "age" | "address"

  const key: PersonKeys = "address";

  //10. 인덱스 시그니처 타입 별칭

  //키가 string이고 값이 string인 거 일괄 적용
  //대신 자동완성은 안 됨
  //고정속성은 자동완성이 된다. 타입별칭 뒤에 . 을 써 주면 자동완성돼서 뜸
  type UserMap = {
    //👍고정값 넣으면 자동완성 됨
    // name: string,
    [key: string]: string;
  };

  let users: UserMap = {
    name: "John",
    address: "seoul",
  };

  //그럼 만약 자동완성을 사용하고 싶다면? 고정값을 넣자
  // users.name;
}
