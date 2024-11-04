//1. 문자열 길이 구하기
const str = "Hello, World!";
console.log(str.length);

//2. 특정 문자 추출
const str2 = "JavaScript";
console.log(str2.charAt(0));

//3.문자열에서 특정 인덱스 찾기
const str3 = "Hello, World!";
console.log(str3.indexOf("o"));

//4. 문자열 잘라내기
const str4 = "Hello, World!";
console.log(str4.slice(-6));

//5. 대문자로 변환
const str5 = "hello";
console.log(str5.toUpperCase());

//6. 문자열의 공백 제거
const str6 = "   Hello, World!   ";
console.log(str6.trim());

//7. 문자열 분할
const str7 = "apple,banana,cherry";
console.log(str7.split(","));

//8. 문자열 치환
const str8 = "Hello, World!";
console.log(str8.replace("World", "JavaScript"));

//9. 포함 여부 확인
const str9 = "I love JavaScript";
console.log(str9.includes("Java"));

//10. 문자열 시작 확인
const str10 = "Hello, World!";
console.log(str10.startsWith("Hello"));

//11. 문자열 끝 확인
const str11 = "Hello, World!";
console.log(str11.endsWith("!"));

//12. 문자열 반복
const str12 = "Hello";
console.log(str12.repeat(3));

//13. 정규 표현식으로 매치
const str13 = "The rain in Spain stays mainly in the plain.";
console.log(str13.match(/ain/g));

//14. 정규 표현식 검색
const str14 = "The quick brown fox jumps over the lazy dog.";
console.log(str14.search(/fox/));

//15. 문자열 왼쪽 채우기
const str15 = "5";
console.log(str15.padStart(2, 0));

//16. 문자열 오른쪽 채우기
const str16 = "5";
console.log(str16.padEnd(2, 0));

//17. 지역에 따른 대문자 변환
const str17 = "istanbul";
console.log(str17.toLocaleUpperCase());

//18. 원시 값 반환
const str18 = new String("Hello, World!");
console.log(str18.valueOf());

//19. 중복된 문자 제거
const str19 = "banana";
let result = "";
str19.split("").forEach((v) => {
  if (!result.includes(v)) result += v;
});
console.log(result);

//20. 문자열 대소문자 반전
const str20 = "Hello, World";
const arr = str20.split("");
let result20 = "";

arr.forEach((v) => {
  if (v.toLowerCase() === v) {
    result20 += v.toUpperCase();
  } else result20 += v.toLowerCase();
});
console.log(result20);


//21. 특정 문자 개수 세기
const str21 = "banana";
console.log(str21.match(/a/g).length);

//22. 공백으로 구분된 문자열 결합
const words = ["Hello", "world!"];
let str22 = "";
words.forEach((v) => {
  str22 += v;
});
console.log(str22);

//23. 대소문자 무시하고 문자열 비교
const str23_1 = "Hello";
const str23_2 = "hello";
const strC = str23_1.toLowerCase();
console.log(strC === str23_2); // true
