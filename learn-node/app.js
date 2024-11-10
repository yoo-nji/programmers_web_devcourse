//nodejs에서만 사용할 수 있는 추가적인 기능이나 문법이 더 있음
// console.log("hi");

// const arge = process.argv;
// console.log(arge);

// //nodejs 기본 내장 모듈: 별도의 추가 설치 없이 사용 가능
const fs = require("fs"); // 파일 관리와 관련된 모듈
const path = require("path"); // 파일 경로와 관련된 모듈

const files = process.argv.slice(2, -1); // 인수를 받아올 수 있음
const searchString = process.argv[process.argv.length - 1]; //검색하고 싶은 문자열(마지막 인덱스)

function extractMatchingString(content, searchString) {
  const regExp = new RegExp(`^.*?${searchString}.*$`, "gm");
  return content.match(regExp);
}

function processFiles(files, searchString) { //검색할 파일, 검색하고 싶은 문자
  let result = "";
  // 파일을 모두 읽을 거야
  files.forEach((file) => {
    const filePath = path.resolve(file); // 파일 경로 가져오기
    const content = fs.readFileSync(filePath, "utf-8"); //파일의 내용을 읽겠다
    const sentences = extractMatchingString(content, searchString);

    if (sentences.length > 0) {
      result += `### ${file} ###`;
      result += sentences.join("\n") + "\n\n";
    }

    console.log(sentences);
  });

  // console.log(result);
}

processFiles(files, searchString);


// 실행 방법
// node app.js log1.txt log2.txt log3.txt "ERROR"