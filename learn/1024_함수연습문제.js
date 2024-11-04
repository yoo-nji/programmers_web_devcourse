//연습문제
//Q1
```jsx
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
```;
{
  //1
  function sum(...args) {
    let result = 0;
    for (const value of args) {
      result += value;
    }
    console.log(result);
  }
  sum(1, 2, 3, 4, 5);
}

//Q2. 
//덧셈 뺄셈 곱셈 나눗셈
//매개변수 2개 제한

```jsx
//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  
//구현 방법은 자율입니다.
```;
{
  //2
  function calculate(num1, num2, calc) {
    if (calc === '+') {
      return num1 + num2;
    } else if (calc === '-') {
      return num1 - num2;
    } else if (calc === '*') {
      return num1 - num2;
    } else if (calc === '/') {
      return num1 / num2;
    }
  }

  console.log(calculate(3, 5, '+')); // 8
}


//Q3. 
//짝수와 홀수 판별하기

```jsx
//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
```;
{
  //3
  function isEven(num) {
    if (num % 2 === 0) {
      return true;
    } else { return false; }
  }

  console.log(isEven(7));
}

//Q4.배열의 모든 요소 더하기
//배열의 모든 요소의 합을 반환하는 함수를 작성하세요
```jsx
console.log(sumArray([1, 2, 3])); // 6
```;

{
  //4
  function sumArray(num) {
    let result = 0;
    for (const value of num) {
      result += value;
    }
    return result;
  }
  console.log(sumArray([1, 2, 3]));
}


//Q5.배열의 최대값 찾기
//배열에서 최대값을 찾는 함수를 작성하세요
```jsx
console.log(findMax([1, 5, 3, 9, 2])); // 9
```;

{
  //5
  function findMax(arr) {
    let max = arr[0];

    for (const value of arr) {
      if (value > max) {
        max = value;
      }
    }
    return max;
  }

  console.log(findMax([1, 5, 3, 9, 2]));
}



//Q6.문자열 반전
//주어진 문자열을 반전시켜 반환하는 함수를 작성하세요
```jsx
console.log(reverseString("hello")); // "olleh"
```;
{
  //6
  const reverseString = function (text) {
    let array = "";
    for (let i = text.length - 1; i >= 0; i--) {
      array += text[i];
    }
    return array;
  };

  console.log(reverseString("hello")); // "olleh"
}




//Q7.문자열에서 특정 문자 개수 세기
//주어진 문자열에서 특정 문자의 개수를 세는 함수를 작성하세요
```jsx

console.log(countCharacter("banana", "a")); // 3
```;

{
  //7
  const countCharacter = function (text, target) {
    let count = 0;

    for (const value of text) {
      if (target === value) {
        count++;
      }
    }
    return count;
  };
  console.log(countCharacter("banana", "a"));
}



//Q8.팩토리얼 계산하기
// - 양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
// - 함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.

{
  //8
  const factorial = function (number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  };

  console.log(factorial(5));
}



//Q9.삼각형 넓이 계산하기
```jsx
//삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
//함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.
```;
{
  //9
  const triangleArea = function (base, height) {
    return (base * height) / 2;
  };

  console.log(triangleArea(10, 5));

}


//연습문제 +
//1. 특정 문자 제거
{
  const removeChar = function (text, target) {
    let str = "";
    for (const value of text) {
      if (value !== target) {
        str += value;
      }
    };
    return str;
  };

  console.log(removeChar("hello world", "o"));
};

//2. 배열 요소를 반전
{
  const reverseArray = function (arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    };
    return reversed;
  };
  console.log(reverseArray([1, 2, 3, 4, 5]));
}

//3. 특정 숫자 찾기
{
  const containsNumber = function (arr, target) {
    for (const value of arr) {
      console.log(value);
      if (value === target) {
        return true;
      } else return false;
    }
  };
  console.log(containsNumber([1, 2, 3, 4, 5], 5)); // true
  console.log(containsNumber([1, 2, 3, 4, 5], 7)); // false
}

//4. 애너그램인지 확인
{
  const isAnagrams = function (text1, text2) {
    if (text1.length === text2.length) {
      let count = 0;
      for (const t1 of text1) {
        for (const t2 of text2) {
          if (t1 === t2) {
            count += 1;
          }
        }
      }
    } if (count === text1.length) {
      return true;
    }
    return false;
  };

  console.log(isAnagrams("listen", "silent"));
  console.log(isAnagrams("fluster", "restful"));
  console.log(isAnagrams("rat", "car"));
}
//4번 문제 다시 풀어보기
{
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

  }

}






//5. 배열에서 두 수의 합
{
  const twiceSum = function (arr, target) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let num1 = arr[i];

      for (let j = i + 1; j < arr.length; j++) {
        let num2 = arr[j];

        if (num1 + num2 === target) {
          result.push([num1, num2]);
        }
      }
    }

    return result;
  };

  console.log(twiceSum([1, 2, 3, 4, 5], 5));  // 출력: [[1, 4], [2, 3]]
}

//연습문제++
//1. 문자열 압축
{
  const compressString = function (str) {
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count += 1;
      } else {
        result += str[i] + count;
        count = 1;
      }
    }
    return result;
  };


  console.log(compressString("aaabbbccc"));
}


//2.팰린드롬 확인하기(쉬운 버전)
//강사님 풀이
//앞글자와 뒷글자를 동시에 비교하기! length를 이용함
{
  const isPalindrome = function (text) {
    let reverse = "";
    for (let i = text.length - 1; i >= 0; i--) {
      reverse += text[i];
    }
    return reverse === text ? true : false;
  };

  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello"));   // false
  console.log(isPalindrome("level"));   // true
  console.log(isPalindrome("world"));   // false
}

//3. 펠린드롬 확인하기 (어려운 버전) 
{
  const isPalindromeSentence = function (str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
      // 공백 제거
      if (str[i] !== ' ') {
        reverse += str[i];
        console.log(reverse);
      }
    }
    return reverse === str ? true : false;
  };

  console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
  console.log(isPalindromeSentence("Was it a car or a cat I saw?"));  // true
  console.log(isPalindromeSentence("Hello, world!"));                  // false
  console.log(isPalindromeSentence("No 'x' in Nixon"));                // true
}


//4. 최대 공약수(GCD)
{
  const gcd = function (num1, num2) {
    let number = num1 > num2 ? num2 : num1; //두 수 중 작은 수를 number 에 할당
    let max = 1;
    for (let i = 1; i <= number; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        max = i;
      }
    }
    return max;
  };

  console.log(gcd(56, 98));
  console.log(gcd(101, 10));
  console.log(gcd(15, 5));
  console.log(gcd(100, 75));
}


//5. 배열정렬(버블정렬)
//정렬이 끝나도 계속 정렬을 하기 때문에 배열 정렬 알고리즘 중에서 제일 효율이 떨어진다
{
  const bubbleSort = function (arr) {
    let temp = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // swap 로직: 값 교환
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  };
  console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
}



