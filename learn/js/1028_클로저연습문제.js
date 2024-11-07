//1 카운터 만들기
{
  function createCounter() {
    let count = 0;
    return function () {
      count += 1;
      return count;
    };
  }

  let counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
}

//2 비공식적인 캐싱 
function squarec() {
  const cache = {};
  return function (num) {
    if (cache[num]) return cache[num];
    cache[num] = num ** 2;
    return cache[num];
  };
}
let square = squarec();

console.log(square(4)); // 16
console.log(square(4)); // 16 (캐시 사용)
console.log(square(5)); // 25


//3 지연 실행
function delayExecution(ms) {
  return function (callback) {
    setTimeout(callback, ms);
  };
}
let delayedFunc = delayExecution(1000);
delayedFunc(function () {
  console.log("Executed after 1 second");
});

//4 고유 id 생성기
function createIdGenerator() {
  let id = 0;
  return () => {
    id = id + 1;
    return id;
  };
}

let getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

//5 메모이제이션 
function fibonacciC() {
  const cache = {};
  return function fib(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fibonacci = fibonacciC();

console.log(fibonacci(10)); // 55
console.log(fibonacci(10)); // 55 (메모이제이션 사용)


//6 문자열 결합
function createStringCombiner() {
  let result = "";
  return function (str) {
    return result += str + " ";
  };
}

const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner("World")); // "Hello World"

//7 객체 속성 카운터
function createPropertyCounter() {
  let count = 0;
  return function (obj) {
    for (let _ in obj) { // 안 쓰는 건 언더바로 한다 그냥 암묵적인 약속
      count += 1;
    } return count;
  };

};

const counter = createPropertyCounter();
console.log(counter({ a: 1, b: 2 })); // 2
console.log(counter({ a: 1 })); // 1


//8: 배열 필터링
function createFilter(condition) {
  return function (num) {
    return console.log(num);
  };
}

const filterEven = createFilter(num => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]


function outerFunction() {
  let outerVariable = 'Hello';

  return function innerFunction() {
    // 외부 함수의 변수를 참조하는 내부 함수
    return outerVariable; // outerVariable에 접근 가능
  };
}

const myClosure = outerFunction(); // innerFunction이 반환되어 myClosure에 할당됨
console.log(outerFunction()); // "Hello"


