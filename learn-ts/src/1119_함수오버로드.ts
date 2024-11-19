{
  // 함수 오버로드
  //✅ 함수 선언문에서만 사용 가능!
  //자바스크립트엔 없는 문법임
  function combine(a: number, b: string): string; //오버로드 시그니처
  function combine(a: string, b: number): string; //오버로드 시그니처
  function combine(a: number, b: number): string; //오버로드 시그니처
  function combine(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b;
    else return `${a}${b}`;
  }

  const result = combine(10, "a");
  // if (typeof result === 'string')
  console.log(result.toUpperCase());

  //⚠️ 단 오버로드 시그니처가 한 줄이라도 들어간이상
  // const result2 = combine("a", 10);
  //이렇게 다른 걸 써 주면 오류남, 모든 경우의수를 다 써 줘야 한다
}
