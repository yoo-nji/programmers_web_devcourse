//함수 + 유니언
//매개변수, 반환값의 타입에도 유니언 타입 사용 가능
{
  function sum(a: number | string, b: number | string): number | string {
    if (typeof a === "string") {
      a = parseInt(a);
    }
    if (typeof b === "string") {
      b = parseInt(b);
    }
    return a + b;
  }
}

//주의할 점
//toUpperCase()
{
  let value: string | number = "hello, world";
  console.log(value.toUpperCase()); //HELLO, WORLD
}
{
  //이렇게 쓰면 오류남
  function printProcess(value: string | number): void {
    console.log(value.toUpperCase());
  }
  printProcess("hello, world");
}
//⚠️ 해결: 타입가드
// 코드에서 값의 타입을 좁히거나 확실하게 추론할 수 있도록 도와주는 방법
//유니언 타입을 사용할 땐 타입을 좁힐 필요가 있다
//typeof, instanceof(클래스에서 사용)
{
  function printProcess(value: string | number): void {
    if (typeof value === "string") console.log(value.toUpperCase());
  }
  printProcess("hello, world");
}
//이렇게 다시 활용하려고 하면 에러남
{
  function printProcess(value: string | number): string | number {
    return value;
  }

  //위에 반환값으로 string, number로 썼기 때문에
  const value1 = printProcess("hello, world");
  const value2 = printProcess(10);
  //여기서 문자열이다, 숫자열이다 가정하고 해당 메서드를 사용할 수 없다
  console.log(value1.toUpperCase());
  console.log(value2.toFixed(2));
}
//해결
//타입가드를 이용해서 문자열, 숫자열이라는 확신을 줘야 한다
{
  function printProcess(value: string | number): string | number {
    return value;
  }

  const value1 = printProcess("hello, world");
  const value2 = printProcess(10);

  if (typeof value1 === "string") console.log(value1.toUpperCase());
  if (typeof value2 === "number") console.log(value2.toFixed(2));
}
