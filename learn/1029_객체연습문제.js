//1 객체 병합
{
  function mergeObjects(obj1, obj2) {
    const mergeObj = { ...obj1, ...obj2 };
    return mergeObj;
  }

  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };

  console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }

  const obj3 = { x: 10 };
  const obj4 = { y: 20 };
  console.log(mergeObjects(obj3, obj4)); // { x: 10, y: 20 }

  const obj5 = { a: 1, b: 2 };
  const obj6 = { a: 3, b: 4 };
  console.log(mergeObjects(obj5, obj6)); // { a: 3, b: 4 }

  const obj7 = {};
  const obj8 = { z: 5 };
  console.log(mergeObjects(obj7, obj8)); // { z: 5 }
}

//2. 키-값 배열화
{
  function objectToArray(obj) {
    const arr = Object.entries(obj);
    return arr;
  }

  const obj = { a: 1, b: 2, c: 3 };
  console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

  const obj2 = { x: 5, y: 10 };
  console.log(objectToArray(obj2)); // [['x', 5], ['y', 10]]

  const obj3 = { p: 3 };
  console.log(objectToArray(obj3)); // [['p', 3]]

  const obj4 = {};
  console.log(objectToArray(obj4)); // []
}

//3. 객체 값 필터링
{
  function filterByThreshold(obj, threshold) {
    const filteredObj = {};
    for (const key in obj) {
      if (obj[key] >= threshold) {
        filteredObj[key] = obj[key];
      }
    } return filteredObj;
  }


  const obj = { a: 1, b: 5, c: 3 };
  const threshold = 2;
  console.log(filterByThreshold(obj, threshold)); // { b: 5, c: 3 }

  const obj2 = { x: 1, y: 2, z: 3 };
  const threshold2 = 2;
  console.log(filterByThreshold(obj2, threshold2)); // { y: 2, z: 3 }

  const obj3 = { a: 10, b: 5, c: 1 };
  const threshold3 = 6;
  console.log(filterByThreshold(obj3, threshold3)); // { a: 10 }

  const obj4 = { m: -1, n: 0, o: 1 };
  const threshold4 = 0;
  console.log(filterByThreshold(obj4, threshold4)); // { n: 0, o: 1 }
}

//4. 객체의 값 변화
{
  function squareValues(obj) {
    const squareObj = {};
    for (const key in obj) {
      squareObj[key] = obj[key] ** 2;
    } return squareObj;
  }

  const obj = { a: 1, b: 2, c: 3 };
  console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }

  const obj2 = { x: 2, y: 3 };
  console.log(squareValues(obj2)); // { x: 4, y: 9 }

  const obj3 = { p: 0, q: -2 };
  console.log(squareValues(obj3)); // { p: 0, q: 4 }

  const obj4 = {};
  console.log(squareValues(obj4)); // {}
}

//5. 객체에서 특정 키 삭제
{
  function deleteKey(obj, keyToDelete) {
    for (const key in obj) {
      if (key === keyToDelete) {
        delete obj[key];
      }
    } return obj;
  }

  const obj = { a: 1, b: 2, c: 3 };
  const keyToDelete = 'b';
  console.log(deleteKey(obj, keyToDelete)); // { a: 1, c: 3 }

  const obj2 = { x: 10, y: 20, z: 30 };
  const keyToDelete2 = 'y';
  console.log(deleteKey(obj2, keyToDelete2)); // { x: 10, z: 30 }

  const obj3 = { a: 5 };
  const keyToDelete3 = 'a';
  console.log(deleteKey(obj3, keyToDelete3)); // {}

  const obj4 = { m: 1, n: 2, o: 3 };
  const keyToDelete4 = 'p';
  console.log(deleteKey(obj4, keyToDelete4)); // { m: 1, n: 2, o: 3 }
}

//6. 객체의 중복 값 제거 🔥
{

  function removeDuplicateValues(obj) {
    const count = {}; // 값의 갯수를 세는 객체
    const result = {}; // 최종 결과 객체
    console.log(`count: ${count}`);
    // 값이 몇번 등장했는지 계산
    Object.values(obj).forEach((value) => {
      count[value] = (count[value] || 0) + 1;
    });

    Object.keys(obj).forEach((key) => {
      if (count[obj[key]] === 1) {
        result[key] = obj[key];
        console.log(`count: ${count}`);
      }
    });

    return result;
  }


  const obj = { a: 1, b: 2, c: 1, d: 3 };
  console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

  const obj2 = { x: 5, y: 5, z: 10 };
  console.log(removeDuplicateValues(obj2)); // { z: 10 }

  const obj3 = { p: 1, q: 1, r: 1 };
  console.log(removeDuplicateValues(obj3)); // {}

  const obj4 = { m: 3, n: 4, o: 3 };
  console.log(removeDuplicateValues(obj4)); // { n: 4 }

}

//7. 객체의 값으로 키 찾기
{
  function findKeyByValue(obj, num) {
    for (const key in obj) {
      if (num === obj[key]) return key;
    } return null;
  }

  const obj = { a: 1, b: 2, c: 3 };
  console.log(findKeyByValue(obj, 2)); // 'b'
  console.log(findKeyByValue(obj, 4)); // null
  console.log(findKeyByValue(obj, 1)); // 'a'
  console.log(findKeyByValue({}, 1)); // null
}

//8. 객체의 모든 값 곱하기
{
  //배열로 변환하는 메서드 사용해 보기
  function multiplyValues2(obj) {
    let result = 1;
    const arr = Object.values(obj);
    for (const values of arr) {
      result *= values;
    } return result;
  }

  function multiplyValues(obj) {
    let result = 1;
    for (const key in obj) {
      result *= obj[key];
    } return result;
  }

  const obj = { a: 1, b: 2, c: 3 };
  console.log(multiplyValues(obj)); // 6

  const obj2 = { x: 2, y: 3, z: 4 };
  console.log(multiplyValues(obj2)); // 24

  const obj3 = { a: 1, b: 0, c: 3 };
  console.log(multiplyValues(obj3)); // 0

  const obj4 = {};
  console.log(multiplyValues(obj4)); // 1 (곱셈의 항등원)
}