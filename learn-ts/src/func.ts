{
  //기본자료형과 참조자료형에 타입을 붙이는 법
  //함수의 타입 지정
  //=> 매개변수와 반환값의 타입을 지정하는 것

  //함수 선언문
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }

  //함수 표현식
  const expr = function (name: string): string {
    return `Hello, ${name}!`;
  };

  //함수 표현식 화살표함수로 변경
  const exprArrow = (name: string): string => `Hello, ${name}!`;

  //함수 표현식2(화살표 함수 이용)
  const expr2: (name: string) => string = function (name) {
    return `Hello, ${name}!`;
  };

  console.log(greet("John"));
}

{
  //연습(숫자타입)
  //1
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }

  sum(10, 20);

  //2
  const expr = function (n1: number, n2: number): number {
    return n1 + n2;
  };

  //2 화살표 함수로 변경
  const exprArrow = (n1: number, n2: number): number => {
    return n1 + n2;
  };

  //2-1 여기서 즉시 리턴할 경우 리턴과 중괄호가 생략 가능함
  const exprArrow2 = (n1: number, n2: number): number => n1 + n2;

  //3
  const expr2: (n1: number, n2: number) => number = function (n1, n2) {
    return n1 + n2;
  };
}

{
  //void: 함수에서만 쓸 수 있는 타입
  //리턴값이 없을 때 쓸 수 있음 => 아무것도 반환하지 않음
  function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }

  const expr = function (name: string): void {
    console.log(`Hello, ${name}!`);
  };

  const expr2 = (name: string): void => console.log(`Hello, ${name}!`);

  const expr3 = (): void => console.log("Hello");
}

{
  //any, unknown, void

  //매개변수 옵셔널
  //해당 매개변수가 넘어오지 않았을 경우를 짜 주면 된다
  function sum(n1: number, n2?: number) {
    //타입 해결: n2가 안 넘어오면 0으로 해 줘
    return n1 + (n2 || 0);
  }
  sum(10);
}

{
  // 일반 함수 선언 방식
  function sum(n1: number, n2: number = 0): number {
    return n1 + n2;
  }

  // 함수 표현식 방식
  const expr = function sum(n1: number, n2: number = 0): number {
    return n1 + n2;
  };

  // 화살표 함수와 함수 타입 정의
  const expr2: (n1: number, n2: number) => number = function sum(
    n1: number,
    n2: number = 0
  ): number {
    return n1 + n2;
  };
}

{
  //나머지 매개변수 - 숫자일 경우
  function sum(...rest: number[]): void {
    console.log(rest);
  }

  sum(1, 2, 3, 4, 5);
}

{
  //나머지 매개변수 타입이 여러개일 때 => 튜플 사용
  function printValue(...rest: [number, string, number, string]): void {
    console.log(rest);
  }

  printValue(1, "a", 2, "b");

  // 함수 표현식
  const expr = function printValue(
    ...rest: [number, string, number, string]
  ): void {
    console.log(rest);
  };

  // 화살표 함수 + 함수 타입 정의
  const expr2: (...rest: [number, string, number, string]) => void = function (
    ...rest: [number, string, number, string]
  ) {
    console.log(rest);
  };
}

{
  //콜백함수
  // function printUser(callback: (name: string) => void): void {
  //   callback("John");
  // }

  //화살표 함수로 바꿔보기1
  const printUser = (callback: (name: string) => void): void => {
    callback("John");
  };

  //화살표 함수로 바꿔보기2
  const expr2: (callback: (name: string) => void) => void = //
    function printUser(callback) {
      callback("John");
    };

  printUser((name) => {
    console.log(name);
  });
}

{
  // function compareNumbers(n1, n2, callback) {
  //   if (n1 === n2) {
  //     callback("equal");
  //   } else {
  //     callback("not equal");
  //   }
  // }

  // 위 함수 타입 지정하기
  function compareNumbers(
    n1: number,
    n2: number,
    callback: (result: string) => void
  ): void {
    if (n1 === n2) {
      callback("equal");
    } else {
      callback("not equal");
    }
  }

  // 함수 표현식 방식
  const expr = function compareNumbers(
    n1: number,
    n2: number,
    callback: (result: string) => void
  ): void {
    if (n1 === n2) {
      callback("equal");
    } else {
      callback("not equal");
    }
  };

  // 화살표 함수 방식 + 함수 타입 지정
  const expr2: (
    n1: number,
    n2: number,
    callback: (result: string) => void
  ) => void = function (n1, n2, callback) {
    if (n1 === n2) {
      callback("equal");
    } else {
      callback("not equal");
    }
  };

  compareNumbers(10, 20, (result) => {
    console.log(`The numbers are ${result}`);
  });
}

// 연습해 보기
//연습1
{
  const processArray = function (
    arr: number[],
    callback: (item: number) => void
  ) {
    for (const item of arr) {
      callback(item);
    }
  };

  const expr: (arr: number[], callback: (item: number) => void) => void =
    function (arr, callback) {
      for (const item of arr) {
        callback(item);
      }
    };
  processArray([1, 2, 3, 4], (item) => console.log(item * 2));
}

//연습2
{
  //1
  function findInArray(
    arr: number[],
    condition: (item: number) => boolean,
    callback: (result: number) => void
  ): void {
    for (const item of arr) {
      if (condition(item)) {
        // 조건을 평가
        callback(item); // 조건이 true인 경우 callback 호출
        return; // 조건을 만족하면 함수 종료
      }
    }
    console.log("not found"); // 조건을 만족하는 요소가 없을 때
  }

  //2
  const expr: (
    arr: number[],
    condition: (item: number) => boolean,
    callback: (result: number) => void
  ) => void = function (arr, condition, callback) {
    for (const item of arr) {
      if (condition(item)) {
        // 조건을 평가
        callback(item); // 조건이 true인 경우 callback 호출
        return; // 조건을 만족하면 함수 종료
      }
    }
    console.log("not found"); // 조건을 만족하는 요소가 없을 때
  };

  // 호출부
  findInArray(
    [10, 20, 30, 40],
    (item) => item > 25, // 조건: 25보다 큰 값을 찾음
    (result) => {
      console.log(`Found value: ${result}`); // 찾은 값을 출력
    }
  );

  expr(
    [10, 20, 30, 40],
    (item) => item > 25, // 조건: 25보다 큰 값을 찾음
    (result) => {
      console.log(`Found value: ${result}`); // 찾은 값을 출력
    }
  );
}

{
  //반환값이 함수일 경우 ⭐️
  //클로저 패턴
  function createMultipler(factor: number): (num: number) => number {
    return (num) => num * factor;
  }

  const func = createMultipler(10);
  console.log(func(5)); // 50
}

{
  //void
  //never => 절대 반환되지 않는 함수
  //무한루프 -> 고의로 쓸 일이 거의 없어서 실무에선 x
  //에러를 던지는 경우

  function errorFunc(message: string): never {
    throw new Error(message);
  }
}
