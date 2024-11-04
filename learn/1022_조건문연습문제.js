// 1
let score = 64;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else if (score < 60) {
  console.log("F");
}

//2
const num = 8;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3
let isLoggedIn = false;
let isAdmin = false;

if (!isLoggedIn) {
  console.log("Please log in");
} else if (isAdmin) {
  console.log("Welcome, admin!");
} else {
  console.log("Access denied");
}

//4
let a = 4;
let b = 3;

if (a > b) {
  console.log("a is greater");
} else if (a < b) {
  console.log("b is greater");
} else if (a === b) {
  console.log("a and b are equal");
}

//5
let month = 10;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Fall");
    break;
  default:
    console.log("Invalid month");
}

//6
const price = 70000;
if (price >= 100000) {
  console.log(price * 0.8);
} else if (price > 50000) {
  console.log(price * 0.9);
} else {
  console.log(price);
}

//7
let day = 5;
switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  case 7:
    console.log("일요일");
    break;
  default:
    console.log("Invalid day");
}

//8
const number = 3;
if (number > 0) {
  console.log("양수");
} else if (number < 0) {
  console.log("음수");
} else if (number === 0) {
  console.log("0");
}
