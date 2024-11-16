//문자내장객체
//연습문제 +

//1. Palindrome Checker
//문제 설명: 주어진 문자열이 회문인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 확인해야 합니다.
{
  const str = "A man a plan a canal Panama";
  let arr = str.toLowerCase().replaceAll(" ", "").split("");
  let arrC = arr.slice();
  arr.reverse();
  let result = arr.join('') === arrC.join('') ? true : false;

  console.log(result);
}

//2. Vowel Counter
//문제 설명: 주어진 문자열에서 모음(a, e, i, o, u)의 개수를 세세요.
{
  const str2 = "JavaScript is awesome!";
  let a = 0;
  let e = 0;
  let i = 0;
  let o = 0;
  let u = 0;
  const arr2 = str2.toLowerCase().replaceAll(" ", "").split("");
  arr2.forEach((v) => {
    if (v === "a") a = a + 1;
    else if (v === "e") e = e + 1;
    else if (v === "i") i = i + 1;
    else if (v === "o") o = o + 1;
    else if (v === "u") u = u + 1;
  });
}


console.log(`a: ${a}, e: ${e}, i: ${i}, o: ${o}, u: ${u}`);

//3.  Anagram Checker
//문제 설명: 두 문자열이 애너그램인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 비교해야 합니다.
{
  const str1 = "listen";
  const str2 = "silent";
  const arr1 = str1.toLowerCase().replaceAll(" ", "").split("");
  const arr2 = str2.toLowerCase().replaceAll(" ", "").split("");
  const result = arr1.sort().join().replaceAll(",", "") === arr2.sort().join().replaceAll(",", "");
  console.log(result);

}

//4. Word Frequency Counter
//:문제 설명: 주어진 문자열에서 각 단어의 빈도를 세어 객체로 반환하세요.;
{
  const str = "hello world hello";
  const arr = str.toLowerCase().split(" ");
  console.log(arr);

  const obj = {};
  arr.forEach((v) => {
    obj[v] = (obj[v] || 0) + 1;
  });
  console.log(obj);
}

// 5. Capitalize Each Word 
// 문제 설명 : 문자열의 각 단어의 첫 글자를 대문자로 변환하세요.;
{
  const str = "hello world";
  const arr = str.toLowerCase().split(" ");
  // console.log(arr);
  const result = arr.map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(" ");
  console.log(result);
}

//6. Remove Duplicates
// 문제 설명: 문자열에서 중복된 문자를 제거한 새로운 문자열을 만드세요.
{
  const str19 = "banana";
  let result = "";
  str19.split("").forEach((v) => {
    if (!result.includes(v)) result += v;
  });
  console.log(result);
}

//7. Longest Word Finder
//문제 설명: 주어진 문자열에서 가장 긴 단어를 찾으세요
{
  const str = "The quick brown fox";
  let result = "";
  str.split(" ").forEach((v) => {
    if (v.length > result.length) result = v;
  });
  console.log(`가장 긴 단어: ${result}`);
}

//8. String Compression
//문제 설명: 문자열을 압축하세요. 같은 문자가 연속으로 나타날 경우 문자의 개수와 함께 나타내세요. 예) "aaabb" → "a3b2".
{
  const str = "aaabbcaaa";
  let temp = str[0];
  let count = 0;
  let result = "";
  str.split("").forEach((v) => {
    if (temp === v) count += 1;
    else {
      result += temp + count;
      temp = v;
      count = 1;
    }
  });
  result += temp + count;
  console.log(result);
}

// 9. Reverse Words
// 문제 설명 : 문자열의 각 단어를 반대로 뒤집으세요.예) "hello world" → "olleh dlrow".;
{
  const str = "hello world";
  let arr = str.split(" ");
  const result = arr.map(v =>
    v.split("").reverse().join("")
  ).join(" ");
  console.log(result);
}

//10. ### Replace Vowels

// ** 문제 설명 **: 문자열의 모든 모음을 '#'으로 교체하세요.
// ** 기본 제공 코드 **:
{
  const str = "hello world";
  let result = "";
  str.split("").forEach((v) => {
    //!! 정규식에서는 [] 대괄호 안에 넣으면 하나씩 개별적으로 찾을 수 있음(괄호 안의 문자 중 하나라도 일치하면 매칭)
    if (v.match(/[aeiou]/i)) result += "#";
    else result += v;
  });
  console.log(result);
}

//11. Count Consonants
//문제 설명: 주어진 문자열에서 자음의 개수를 세세요
{
  const str = "hello world";
  let result = [];
  str.replaceAll(" ", "").split("").forEach((v) => {
    if (!v.match(/[aeiou]/i))
      result.push(v);
  });
  console.log(result.length);
}

//12 Substring Occurrences
//문제 설명: 주어진 문자열에서 특정 부분 문자열(an)이 몇 번 나타나는지 세세요.
{
  const str = "banana";
  console.log(str.match(/an/g).length);
}

//13. Remove Special Characters
//** 문제 설명 **: 문자열에서 특수 문자를 제거하세요.;
{
  const str = "Hello@World!";
  const result = str.replaceAll(/[^a-zA-Z0-9 ]/g, "");
  console.log(result);
}

//14. String Rotation
// 문제 설명: 두 문자열이 회전 문자열인지 확인하세요. 예) "abc"와 "cab".
{
  const str1 = "abc";
  const str2 = "cab";
  const a = str1.split("").sort().join("");
  //배열로 변환, 정렬, 문자열로 합치기
  const b = str1.split("").sort().join("");;
  console.log(a === b);
}

// 15. String Interleaving
// ** 문제 설명 **: 두 문자열이 교차하여 결합된 형태인지 확인하세요.예) "abc"와 "abdc" → true.;
{
  const str1 = "abc";
  const str2 = "abdc";

  // 정규식 이용하여 str1에 매칭되지 않는 모든 항목 제거
  const regex = new RegExp(`[^${str1}]`, "g");
  const result = str2.replace(regex, ""); // 결과 저장


  console.log(str1 === result ? true : false);


}

//?? 16 Longest Palindromic Substring
//** 문제 설명 **: 주어진 문자열에서 가장 긴 회문 부분 문자열을 찾으세요.;
{
  const str = "babad";
  // 여기에 코드를 작성하세요
}

// 17. Swap Case
//** 문제 설명 **: 문자열의 각 문자의 대소문자를 반전시킨 새로운 문자열을 만드세요.;
{
  const str = "Hello World!";
  let result = "";
  str.split("").forEach((v) => {
    if (v.toLowerCase() === v) result += v.toUpperCase();
    else result += v.toLowerCase();
  });
  console.log(result);
}

//18. ### Sentence Reverse
//** 문제 설명 **: 문자열의 각 문장을 반대로 뒤집고, 문장의 순서도 반대로 하세요.;
{
  const str = "Hello. How are you?";
  const reverse = str.split(" ").reverse();
  const result = reverse.map(v =>
    v.split("").reverse().join("")
  ).join(" ");
  console.log(result);
}

//19. ### Convert to Title Case
// ** 문제 설명 **: 주어진 문자열을 제목 형식으로 변환하세요.각 단어의 첫 글자는 대문자로, 나머지는 소문자로 해야 합니다.
{
  const str = "tHIS Is a tItLE";
  const lowerC = str.toLowerCase();
  console.log(lowerC); //전체 소문자로 
  const result = lowerC.split(" ").map(v =>
    v.charAt(0).toUpperCase() + v.slice(1) //첫글자 대문자 나머지 소문자 
  ).join(" ");
  console.log(result);
}

// 20. Create Acronym
//** 문제 설명 **: 주어진 문자열에서 각 단어의 첫 글자를 따서 약어를 만드세요.;
{
  const str = "For your information";
  const result = [];
  str.split(" ").forEach(v => result.push(v.charAt(0).toUpperCase()));
  console.log(result.join(""));
}

//21. Validate Email Format
//** 문제 설명 **: 주어진 문자열이 유효한 이메일 주소 형식인지 확인하세요.;
{
  const email = "example@test.com";
  // 여기에 코드를 작성하세요
  console.log(email.includes("@"));
}

// 22. Find Missing Letters
//** 문제 설명 **: 주어진 문자열에서 누락된 알파벳 문자를 찾아 배열로 반환하세요.
{
  const str = "abcdegh";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  console.log([...alphabet].filter(char => !str.includes(char)));
}

//23.Sort Characters
//** 문제 설명 **: 주어진 문자열의 문자를 알파벳 순서로 정렬하여 새로운 문자열을 만드세요.;
{
  const str = "banana";
  const strNew = str.split("").sort().join("");
  console.log(strNew);
}

//--------------------------------------------------------
//연습문제 ++

//1. Longest Common Prefix
// ** 문제 설명 **: 주어진 문자열 배열에서 가장 긴 공통 접두사를 찾아 반환하세요.;


function solution(players, callings) {
  let temp;
  callings.forEach((call) => {
    const playersIndex = players.indexOf(call);
    if (playersIndex > 0) {
      temp = players[playersIndex - 1];
      players[playersIndex - 1] = players[playersIndex];
      players[playersIndex] = temp;
      // console.log(players);
    }
  });
  return console.log(players);
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);