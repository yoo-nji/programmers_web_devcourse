//연습문제
//1
{
  const add: (a: number, b: number) => void = function (a, b) {
    console.log(a + b);
  };
  add(1, 2);
}
//2
{
  const greet: (name: string) => void = function (name) {
    console.log(`Hello, ${name}!`);
  };
}
//3
{
  const sumAll: (...rest: number[]) => void = function (...rest) {
    console.log([...rest].reduce((acc, cur) => acc + cur, 0));
  };

  sumAll(1, 2, 3);
}
//4
{
  const sum: (a: number, b?: number) => void = function (a, b = 0) {
    console.log(a + b);
  };
  sum(1);
}
//5
{
  const multiply = (a: number, b: number): number => a * b;
  console.log(multiply(2, 3));
}
//6
{
  const concatStringAndNumber = (a: string, b: number): string => a + b;
  console.log(concatStringAndNumber("test", 123));
}
//7
{
  const greet = (name: string, message?: string): string =>
    `${name} ${message || "Welcome"}`;
  console.log(greet("John"));
}
//8
{
  const findMax = (numArr: number[]): number => Math.max(...numArr);
}
//9
{
  const double = (num: number): number => num * 2;
  console.log(double(5));
}
{
  const getInfo = (value: number | string) => {
    if (typeof value === "number") return `{Name: ${value}}`;
    else return `{age: ${value}}`;
  };
  console.log(getInfo(20));
  console.log(getInfo("John"));
}

//----------------------------------------------------------------
//연습문제+
//1
{
  const sumAllNumbers = (...arr: number[][]): number[] =>
    arr.map((arr) => arr.reduce((acc, cur) => acc + cur));
  console.log(sumAllNumbers([1, 2, 3, 4, 5]));
}
//2
{
  const doubleValue = (num: number): number => num * 2;
  const double: (num: number) => number = function (num) {
    return num * 2;
  };
}
//3
{
  const multiplyArrays = (n1: number[], n2: number[]): number[][] => {
    const min = n1.length > n2.length ? n2.length : n1.length;
    let n1Arr: number[] = [];
    let n2Arr: number[] = [];
    for (let i = 0; i < min; i++) {
      n1Arr.push(n1[i] * i);
      n2Arr.push(n2[i] * i);
    }
    return [n1Arr, n2Arr];
  };
  console.log(multiplyArrays([1, 2, 3, 4], [4, 5, 6]));
}
//4 타입을 숫자로 한정
{
  const intersection = (n1: number[], n2: number[]): number[] =>
    n1.filter((n) => n2.includes(n));
  console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
}
//5
{
  const formatInfo = (obj: { name?: string; age?: number }): void => {
    if (obj.name && obj.age) console.log(`Name: ${obj.name} Age: ${obj.age}`);
    else if (obj.name) console.log(`Name: ${obj.name}`);
    else if (obj.age) console.log(`Age: ${obj.age}`);
    else console.log(`해당 값이 없습니다`);
  };
  formatInfo({ name: "John" });
  formatInfo({ age: 30 });
  formatInfo({ name: "John", age: 30 });
  formatInfo({});
}
//6
{
  const combineStrings = (str1: string, str2: string): string => str1 + str2;
  const combineStrings2: (str1: string, str2: string) => string = (
    str1,
    str2
  ) => str1 + str2;
}
//7
{
  const squareArray = (numArr: number[]): number[] => numArr.map((x) => x ** 2);
  console.log(squareArray([1, 2, 3, 4, 5]));
}
//8
{
  const addStringAndNumber: (str: string, num: number) => string = (str, num) =>
    `${str}${num}`;
  console.log(addStringAndNumber("test", 123));
}
//9
{
  const compareValues = (num: number, str: string): string =>
    num > str.length ? "Number is larger" : "String is larger";
}
