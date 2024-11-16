//NodeJS 기본 동작은 비동기
//1. 비동기로 동작함
//end가 먼저 출력되고 이후 "file read end" 출력
// const fs = require('fs');

// fs.readFile('./big.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("file read end");
//   // console.log(data);
// });
// console.log("end");

//2. async 활용
//모든 비동기는 promises를 사용해서 모듈을 불러와 줘야 됨
const fs = require('fs').promises;

async function readFileAsync() {
  const data = await fs.readFile('./big.txt', 'utf8');
  console.log("file read end");
}
async function start() {
  await readFileAsync();
  console.log("end");
}

start();