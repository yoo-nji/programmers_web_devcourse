//타입스크립트 = 자바스크립트 + 타입시스템(확장)
{
  // 1. string 타입
  let str: string = "Hello, Typescript";
  console.log(str);
}
{
  //2. number 타입
  let x: number = 10; //정수
  let y: number = 3.14; //소수점
  let z: number = -100; //음수
  let a: number = NaN; // Not a Number
  let b: number = Infinity; //무한대

  let result: number = 0 / 0; //NaN
  let positiveInfinity: number = 1 / 0; //무한대
}
{
  // 3. boolean 타입
  let isDone: boolean = true;
  let isTrue: boolean = false;
  let result: boolean = 10 > 5; // true
  let result2: boolean = "hello" === "hello"; // true

  let boolTrue: boolean = JSON.parse("true");

  //falsy 0, "", NaN

  let empty = "";
  let isZero: boolean = !!0;
  let isNanValue: boolean = !!NaN;
}
{
  //object 타입
  //기본 자료형 제외 객체, 배열, 함수 등 커버 가능(남용 주의)
  let emptyObj: object = {};
  //!!단점
  //이렇게 쓰면 출력시 오류 남
  // let obj: object = { name: "John", age: 30 };
  //!!해결
  //정확하게 속성 타입을 지정해 줘야 한다
  let obj: { name: string; age: number } = { name: "John", age: 30 };
  let emptyArr: object = [];
  let emptyFunc: object = function () {};
  //출력
  console.log(obj.name);
}
{
  //array 타입: 배열
  //1. (최신)
  const empty: [] = [];
  //2. (구버전)
  const emptyArrOther: Array<[]> = [];

  //but, 구성요소가 있다면
  // 오류
  // const numArr: [] = [1, 2, 3]
  //해결
  const numArr: number[] = [1, 2, 3];

  const stringArr: string[] = ["a", "b", "c"];
  const stringArrOther: Array<string> = ["a", "b", "c"];

  const fruits: string[] = new Array("apple", "banana", "city");
  const fruitsOther: Array<string> = ["apple", "banana", "city"];

  //그럼 배열 안에 문자와 숫자가 같이 있다면?
  //해결: 각각 자리에 맞는 타입을 수동으로 지정해 줘야 함(튜플)
  const mix: [number, string, {}, number[]] = [1, "a", {}, [1, 2, 3]];

  //유니언 타입
  // (string | number)[]는 string 또는 number 타입의 값이 배열에 포함될 수 있다는 뜻
  const mixedArr: (string | number)[] = ["apple", 1, "banana", 2];

  //중첩된 배열
  const nestedArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  // const nestedArrayOther: Array<Array<number>> = [
  // [1, 2, 3],
  // [4, 5, 6],
  // [7, 8, 9],
  // ];
}

{
  //튜플
  //옵셔널 요소: 초기 할당될 때 없어도 됨
  let person: [string, number] = ["John", 30];
  let user: [string, number, string?] = ["John", 25];
  //?이 들어가면 있어도 되고 없어도 되는 거임
  //튜플은 느슨하게 검사를 하기 때문에 number타입이 들어가도 오류가 안 뜸
  user.push(Number(23));
  //4개도 들어감
  user.push(Number(23));
  console.log(user);

  //구조 분해 할당
  let [item, ...rest]: [string, ...number[]] = ["item1", 1, 2, 3, 4];
}

{
  //null, undefined
  let x: null = null;

  //null 병합 연산자
  // 왼쪽 값(변수)이 null이거나 undefined라면, 오른쪽 값(대체값)을 반환
  let c = x ?? "test";

  let b: undefined = undefined;
}

{
  //any: 모든 타입 허용(명시적)
  //사용이유: 일부러 모든 자료형을 다 허용하게 지정, 개발 속도를 높이기 위해
  let value: any = 10;
  value = "hello";
  value = true;
  value = null;

  let any: any = [1, 2];
  console.log(any[1]);
}

{
  //unknown: 모든 타입 허용(타입을 알 수 없을 때)
  //진짜 모르니까 나중에 뭐가 들어갔는지 확인해 보겠다
  let value: unknown = [1, 2];
  //에러남
  // console.log(value[0]);

  //해결
  //실제 값을 사용할 때, 타입을 검증해야 함
  //isArray로 검사 (타입가드)
  if (Array.isArray(value)) {
    console.log(value[0]);
  }

  //✅ 실무적인 관점에서 any 타입을 지정할 바엔 unknown을 사용
}
