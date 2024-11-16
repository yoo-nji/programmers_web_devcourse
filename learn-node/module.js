//math.js 파일에서 내보낸 모듈 외부에서 받기
const math = require("./math");

const sum = math.add(5, 3);
const difference = math.subtract(5, 3);

console.log(sum); // 8
console.log(difference); // 2
