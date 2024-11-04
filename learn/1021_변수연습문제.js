// 1
let x;
let y;
x = 10;
y = 20;
let sum = x + y;
console.log(sum);

//2
let name = "Alice";
name = "Bob";
console.log(name);

//3
const PI = 3.14;
console.log(PI);

//4
let a;
let b;
a = 5;
b = 10;

let c;
c = a;
a = b;
b = c;
console.log(a, b);

//4번 다른 풀이
let a2 = 5;
let b2 = 10;
[a2, b2] = [b2, a2];
console.log(a2, b2);