//1. 숫자비교
let num = 7;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

//2. 최댓값 찾기
let a = 3;
let b = 6;
let c = 9;
let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
console.log(max);

//3. 짝수 홀수 확인
let number = 45;
console.log(number % 2 === 0 ? "Even" : "Odd");

//4. 로그인 확인
let isLoggedIn = false;
console.log(isLoggedIn === true ? "Welcome" : "Please log in");

//5. 성인 확인
let age = 18;
console.log(age >= 20 ? "Adult" : "Minor");