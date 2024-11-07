/*

[문제]
매개변수로 숫자를 전달하면 그 숫자의 역순을 되돌려주는
함수를 만들어주세요.

ex) 32125 -> 52123
    15231 -> 13251 
*/

//방법1
function reverse_to_number(number) {
  return String(number).split("").reverse().join("");
}

//방법2: 화살표함수(리액트, 뷰에서 많이 사용)
const reverse_to_number = (number) => String(number).split("").reverse().join("");


let a = reverse_to_number(32125);
console.log(a); // 52123

let b = reverse_to_number(13251);
console.log(b); // 15231

//--------------------------------------------------------

/*
  [가장 긴 단어를 출력하기]

  매개변수로 전달된 문장에서 가장 긴 단어를 출력해주세요.

*/
//방법1: reduce() 사용
function findLongStr(str) {
  return str.split(" ").reduce((a, b) => a.length > b.length ? a : b);
}

//방법2: sort()이용해서 문자 길이로 정렬
{
  function findLongStr(str) {
    // 1. split()
    const stringToArray = str.split(" ");
    // 2. sort()
    const sortArray = stringToArray.sort((a, b) => b.length - a.length);
    // 3. shift()
    const longString = sortArray.shift();

    return longString;
  }
}
//메서드 체이닝 이용해서 정리된 ver
{
  const findLongStr = (str) =>
    str
      .split(" ")
      .sort((a, b) => b.length - a.length)
      .shift();
}

let result = findLongStr("we are the champion");
console.log(result); // champion

let result2 = findLongStr("i`m fine thank you, and you?");
console.log(result2); // thank
