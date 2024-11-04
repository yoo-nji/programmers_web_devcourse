//함수 연습문제
//유클리드 호제법 - 최대공약수, 최소공배수 문제


{//1
  const gcd = (num1, num2) => {
    if (num2 === 0) return num1;
    else return gcd(num2, num1 % num2);
  };

  const solution = (num1, num2) => {
    const gcdValue = gcd(num1, num2);
    const lcm = num1 * num2 / gcdValue;
    const arr = [gcdValue, lcm];
    return arr;
  };
  console.log(solution(3, 12)); // [3, 12]
  console.log(solution(2, 5)); // [1, 10]
}

{//2
  const gcd = (num1, num2) => num2 === 0 ? num1 : gcd(num2, num1 % num2);



  const gcdValue = function (text) {
    let gcd = "";

  };




  const solution = function (arr) {
    let a;
    let b;
    최대공약수 = gcd(arr);
    for (let i = 0; i < arr.length - 1; i++) {
      a *= num;
      b = 최대공약수 ** (arr.length - 1);
    }
    return b / a;
  };

  console.log(solution(3, 12));

};
