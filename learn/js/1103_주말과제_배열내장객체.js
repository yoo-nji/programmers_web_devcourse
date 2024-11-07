//배열내장객체 연습문제
const students = [
  { name: "Alice", age: 21, gender: "male", height: 170 },
  { name: "Bob", age: 19, gender: "male", height: 165 },
  { name: "Charlie", age: 20, gender: "male", height: 175 },
  { name: "David", age: 22, gender: "male", height: 180 },
  { name: "Eve", age: 17, gender: "female", height: 160 },
  { name: "Frank", age: 18, gender: "male", height: 175 },
  { name: "Grace", age: 21, gender: "female", height: 165 },
  { name: "Henry", age: 19, gender: "male", height: 170 },
  { name: "Ivy", age: 14, gender: "female", height: 155 },
  { name: "Jack", age: 22, gender: "male", height: 185 },
];

// 1. 키가 185인 학생 1명 찾기
const student = students.find((v) => v.height === 185);
console.log(student ? student.name : "학생을 찾지 못했습니다.");

//2. 나이가 20살 이상인 학생들 찾기
const student2 = [];
students.forEach((v) => {
  if (v.age >= 20) {
    student2.push(v.name);
  };
});
console.log(student2);

//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
console.log(students.some((v) => v.height <= 165));

//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
console.log(students.every((v) => v.age >= 10));

//5. 학생들의 평균 연령 구하기
const ageArr = students.map((v) => v.age);
console.log(ageArr);
const result = ageArr.reduce((acc, num) => acc + num, 0) / ageArr.length;
console.log(result);

//6. 남학생들의 평균 연령 구하기
const maleArr = students.filter(v => v.gender === 'male').map(v => v.age);
// console.log(maleArr);
const result6 = maleArr.reduce((acc, num) => acc + num, 0) / maleArr.length;
console.log(result6);

//7. 여학생들의 이름만 따로 추출해서 새로운 배열 만들기
const femaleArr = students.filter(v => v.gender === 'female').map(v => v.name);
console.log(femaleArr);

//8. 여학생들 중 나이가 가장 어린 학생 찾기
const femaleArr8 = students.filter(v => v.gender === 'female');
// console.log(femaleArr8);
const younFemale = femaleArr8.reduce((young, student) =>
  student.age < young.age ? student : young
);
//!! 콘솔에서 객체를 출력하려면 객체의 속성에 직접 접근해야 됨
// console.log(`최연소 여자: ${younFemale}`);
console.log(`최연소 여자: 이름 - ${younFemale.name}, 나이 - ${younFemale.age}`);


//--------------------------------------------------------


//배열내장객체 연습문제+
//1. 중첩 배열 평탄화
// ** 문제 설명 **
//   n차원 배열을 1차원 배열로 평탄화하는 함수를 작성하세요.배열의 모든 요소를 순회하면서 배열인 요소를 만나면 재귀적으로 평탄화해야 합니다.;
{
  function flattenArray(arr) {
    return arr.flat(Infinity);
  }

  console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
  // 출력: [1, 2, 3, 4, 5, 6, 7]

  console.log(flattenArray([1, [], [2, 3, []], [4, [5, [6]]]]));
  // 출력: [1, 2, 3, 4, 5, 6]

  console.log(flattenArray([[[]]]));
  // 출력: []

  console.log(flattenArray([1, [2, [3, [4, [5]]]]]));
  // 출력: [1, 2, 3, 4, 5]

  console.log(flattenArray([1, 2, 3]));
  // 출력: [1, 2, 3]
}

//2. 배열 내 객체 그룹화
// ** 문제 설명 **
//   객체 배열이 주어졌을 때, 특정 속성을 기준으로 객체들을 그룹화하는 함수를 작성하세요.;
{
  function groupBy(arr, key) {
    // 여기에 코드를 작성하세요
    let obj = {};
    arr.forEach((v) => {
      if (!obj[v[key]]) obj[v[key]] = [];
      //!! 기존엔 "else" obj[v[key]].push(v); 로 작성 => 처음 key값이 나왔을 때 빈 배열만 할당되고 추가하는 로직이 없었다

      obj[v[key]].push(v);
    });
    return obj;
  }


  const people = [
    { name: 'John', age: 20, city: 'New York' },
    { name: 'Jane', age: 20, city: 'Boston' },
    { name: 'Mark', age: 25, city: 'New York' },
    { name: 'Mary', age: 25, city: 'Boston' },
    { name: 'James', age: 30, city: 'New York' }
  ];

  console.log(groupBy(people, 'age'));
  // 출력: {
  //   '20': [
  //     { name: 'John', age: 20, city: 'New York' },
  //     { name: 'Jane', age: 20, city: 'Boston' }
  //   ],
  //   '25': [
  //     { name: 'Mark', age: 25, city: 'New York' },
  //     { name: 'Mary', age: 25, city: 'Boston' }
  //   ],
  //   '30': [
  //     { name: 'James', age: 30, city: 'New York' }
  //   ]
  // }

  console.log(groupBy(people, 'city'));
  // 출력: {
  //   'New York': [
  //     { name: 'John', age: 20, city: 'New York' },
  //     { name: 'Mark', age: 25, city: 'New York' },
  //     { name: 'James', age: 30, city: 'New York' }
  //   ],
  //   'Boston': [
  //     { name: 'Jane', age: 20, city: 'Boston' },
  //     { name: 'Mary', age: 25, city: 'Boston' }
  //   ]
  // }

  // 빈 배열 테스트
  console.log(groupBy([], 'age'));
  // 출력: {}

  // 존재하지 않는 키로 그룹화
  console.log(groupBy(people, 'country'));
  // 출력: { 'undefined': [...] }
}


//?? 3. 중복 요소 제거와 빈도수 계산
// ** 문제 설명 **
//   배열에서 중복된 요소를 제거하고, 각 요소의 등장 빈도수를 계산하는 함수를 작성하세요.;
{
  function getFrequency(arr) {
    // 여기에 코드를 작성하세요
  }

  console.log(getFrequency([1, 2, 3, 1, 2, 1, 4, 5, 4]));
  // 출력: {
  //   unique: [1, 2, 3, 4, 5],
  //   frequency: { '1': 3, '2': 2, '3': 1, '4': 2, '5': 1 }
  // }

  console.log(getFrequency(['a', 'b', 'a', 'c', 'b', 'a']));
  // 출력: {
  //   unique: ['a', 'b', 'c'],
  //   frequency: { 'a': 3, 'b': 2, 'c': 1 }
  // }

  console.log(getFrequency([true, false, true, true]));
  // 출력: {
  //   unique: [true, false],
  //   frequency: { 'true': 3, 'false': 1 }
  // }

  console.log(getFrequency([]));
  // 출력: { unique: [], frequency: {} }

  console.log(getFrequency([1]));
  // 출력: { unique: [1], frequency: { '1': 1 } }
}

//?? 4. 배열 회전
// ** 문제 설명 **
//   배열을 주어진 스텝만큼 오른쪽으로 회전시키는 함수를 작성하세요.음수 스텝은 왼쪽 회전을 의미합니다.;
{
  function rotateArray(arr, steps) {
    // 여기에 코드를 작성하세요
  }

  const input = [1, 2, 3, 4, 5];
  console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
  console.log(rotateArray(input, -1)); // [2, 3, 4, 5, 1]

}

//5. 배열 차집합
// ** 문제 설명 **
//   두 배열이 주어졌을 때, 첫 번째 배열에는 있지만 두 번째 배열에는 없는 요소들을 반환하는 함수를 작성하세요.;
{
  function arrayDifference(arr1, arr2) {
    // 여기에 코드를 작성하세요
  }

  console.log(arrayDifference([1, 2, 3, 4, 5], [2, 4, 6]));
  // 출력: [1, 3, 5]

  console.log(arrayDifference([1, 1, 2, 2], [1, 2]));
  // 출력: []

  console.log(arrayDifference([1, 2, 3], []));
  // 출력: [1, 2, 3]

  console.log(arrayDifference([], [1, 2, 3]));
  // 출력: []

  console.log(arrayDifference([1, 2, 3], [4, 5, 6]));
  // 출력: [1, 2, 3]

  console.log(arrayDifference(['a', 'b', 'c'], ['a']));
  // 출력: ['b', 'c']
}

//6. 연속된 부분 배열의 최대 합
// ** 문제 설명 **
//   정수 배열이 주어졌을 때, 연속된 부분 배열의 합이 최대가 되는 값을 찾는 함수를 작성하세요.;
//!! 버블정렬?
{
  function maxSubArraySum(arr) {
    // 여기에 코드를 작성하세요
  }

  const input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSubArraySum(input1)); // 6 ([4, -1, 2, 1])

  const input2 = [-1, -2, -3, -4];
  console.log(maxSubArraySum(input2)); // -1 ([-1])

  const input3 = [1, 2, 3, 4, 5];
  console.log(maxSubArraySum(input3)); // 15 ([1, 2, 3, 4, 5])

  const input4 = [1, -1, 1, -1, 1, -1, 1];
  console.log(maxSubArraySum(input4)); // 1 ([1])

  const input5 = [-2, -3, 4, -1, -2, 1, 5, -3];
  console.log(maxSubArraySum(input5)); // 7 ([4, -1, -2, 1, 5])
}

//7. 배열 이진 검색
// ** 문제 설명 **
//   정렬된 배열에서 특정 값의 위치를 이진 검색으로 찾는 함수를 작성하세요.값이 없으면 - 1을 반환합니다.;
{
  function binarySearch(arr, target) {
    // 여기에 코드를 작성하세요
  }

  const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15];
  console.log(binarySearch(sortedArr, 7));  // 3
  console.log(binarySearch(sortedArr, 10)); // -1
  console.log(binarySearch(sortedArr, 1));  // 0
  console.log(binarySearch(sortedArr, 15)); // 7
  console.log(binarySearch(sortedArr, 0));  // -1
}

//8. 배열 섞기 (Fisher-Yates 셔플)
// ** 문제 설명 **
//   배열의 요소를 무작위로 섞는 함수를 작성하세요.모든 순열이 동일한 확률로 나타나야 합니다.;
{
  function shuffle(arr) {
    // 여기에 코드를 작성하세요
  }

  const deck = [1, 2, 3, 4, 5];
  console.log(shuffle([...deck])); // [3, 1, 5, 2, 4] (무작위)
  console.log(shuffle([...deck])); // [2, 5, 1, 4, 3] (무작위)
  console.log(shuffle([...deck])); // [4, 3, 5, 1, 2] (무작위)

}

//9. 배열 동등성 비교
{
  function areArraysEqual(arr1, arr2) {
    // 여기에 코드를 작성하세요
  }

  console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));     // true
  console.log(areArraysEqual([1, 2, 3], [1, 2, 3, 4]));  // false
  console.log(areArraysEqual([1, 2, 2], [1, 2, 3]));     // false
  console.log(areArraysEqual([], []));                    // true
  console.log(areArraysEqual([1, 1, 1], [1, 1, 1]));     // true
  console.log(areArraysEqual(['a', 'b'], ['b', 'a']));   // true
}

//10: 배열 교차점 찾기
// ** 문제 설명 **
// 여러 배열의 교차점(공통 요소)을 찾는 함수를 작성하세요.;
{
  function findIntersection(...arrays) {
    // 여기에 코드를 작성하세요
  }

  const arr1 = [1, 2, 3, 4];
  const arr2 = [2, 3, 4, 5];
  const arr3 = [3, 4, 5, 6];
  console.log(findIntersection(arr1, arr2, arr3));        // [3, 4]

  const arr4 = [1, 2, 3];
  const arr5 = [4, 5, 6];
  console.log(findIntersection(arr4, arr5));              // []

  const arr6 = [1, 2, 2, 3];
  const arr7 = [2, 2, 3, 4];
  console.log(findIntersection(arr6, arr7));              // [2, 2, 3]

  const arr8 = ['a', 'b', 'c'];
  const arr9 = ['b', 'c', 'd'];
  const arr10 = ['c', 'd', 'e'];
  console.log(findIntersection(arr8, arr9, arr10));       // ['c']
}