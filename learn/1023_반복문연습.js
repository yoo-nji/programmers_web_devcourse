//연습문제 쉬움
// Q1
for (let i = 1; i <= 9; i++) {
  // console.log(i);
}

// Q2
let numArr = [10, -10, 20, -30, 40];

for (let num of numArr) {
  if (num > 0) {
    // console.log(num);
  }
}

//Q3
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    // console.log(`${i} 짝수`);
  } else {
    // console.log(`${i} 홀수`);
  }
}


// 어려움

//피보나치 수열
// let n = 10; // 원하는 항의 수
let result = [0, 1];
// 1. 피포나치 수열 로직
for (let i = 0; i < n - 2; i++) {
  result.push(result[i] + result[i + 1]);
}
console.log(`피보나치 수열(${n}항):`, result);


const n = 10;
let a = 0; // 1항
let b = 1; // 2항
let temp = null; // 0
const results2 = []; // [0]


for (let i = 0; i < n; i++) {
  results2.push(a);
  temp = a;
  a = b;
  b = temp + b;

  console.log(a, b, temp, results2);
}

console.log(results2);




//2. 소수 찾기 
let results = [];

for (let i = 1; i <= 100; i++) {
  if (i === 1) continue;
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    results.push(i);
  }
}
console.log(results);

// console.log(results);
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]


//3. 배열 합 구하기
const numbers = [5, 10, 15, 20, 25];
let results3 = 0;
for (const number of numbers) {
  results3 += number;
}
console.log(results3);


//4. 문자열 뒤집기
const str = "Hello, World!";
// 문자열 뒤집기 로직
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  // console.log(i);
  reversed += str[i];
}
console.log("뒤집힌 문자열:", reversed);


//5. 특정 숫자까지의 곱 계산
let n5 = 5; // 예시 숫자
let factorial = 1;
// 팩토리얼 로직 
for (let i = 1; i <= n5; i++) {
  factorial *= i;
}
console.log(`${n5}의 팩토리얼:`, factorial); // 출력 120




//6. 암스트롱수

for (let i = 100; i <= 999; i++) {
  let numbers = String(i);
  let sum = 0;
  for (const number of numbers) {
    sum += number ** 3;
  }
  if (sum === i) {
    console.log(i);
  }
};

// 이중 반복문
for (let i = 0; i < 2; i++) {
  console.log(`i: ${i}`);
  for (let j = 0; j < 3; j++) {
    if (j === 1) { break; }
    console.log(`j: ${j}`);
  }
}

// 이중 반복문
console.log(`쉬고`);
for (let i = 0; i < 2; i++) {
  console.log(`i: ${i}`);
  for (let j = 0; j < 3; j++) {
    if (i === 1) { break; }
    console.log(`j: ${j}`);
  }
}