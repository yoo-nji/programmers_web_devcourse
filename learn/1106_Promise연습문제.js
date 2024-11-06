// 1. 기본 Promise
//** 문제:** `resolve`와 `reject`를 사용하는 간단한 Promise를 생성하고, 성공 시 "성공!"을 출력하도록 하세요.;
{
  const promise = new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("1번 성공!");
    }, 2000);
  });

  promise//
    .then((result) => { console.log(result); });

  //!!tip: 매개변수를 받아서 똑같이 전달하는 용도라면 생략 가능하다
  promise//
    .then(console.log);
}

//2. 체이닝
//** 문제:** 두 개의 Promise를 체이닝하여 첫 번째 Promise가 성공적으로 완료된 후 두 번째 Promise가 실행되도록 하세요.;
{
  const promise = new Promise((resolve, _) => {
    setTimeout(() => resolve(2));
  });

  promise //
    .then(num => num * 2)
    .then(num => console.log(`2번: ${num * 3}`));
}

//3. 오류 처리
//** 문제:** Promise를 생성하고, `reject`를 사용하여 오류를 발생시키세요.
{
  const promise = new Promise((_, reject) => {
    reject(new Error("Error!!"));
  });

  promise//
    .catch(console.error);
}

//4. 비동기 작업
//** 문제:** setTimeout을 사용하여 2초 후에 "비동기 작업 완료!"라는 메시지를 출력하는 Promise를 생성하세요.
{
  const promise = new Promise((resolve, _) => {
    setTimeout(() => resolve("비동기 작업 완료!"), 2000);
  });

  promise//
    .then((result) => console.log(`4번: ${result}`));
}

//5. 중첩 Promise
//** 문제:** 하나의 Promise 안에서 다른 Promise를 생성하여 중첩된 체이닝을 해보세요. 
{
  const promise = new Promise((resolve, _) => {
    resolve(2);
  });

  promise //
    .then(num => num * 2)
    .then(num => new Promise((resolve) => resolve(num * 3)))
    .then(console.log);
}

//6. 조건부 실행
//** 문제: condition 변수를 생성하고, 변수에 할당된 true, false 값에 따라서 resolve, reject를 선택하여 호출하는 코드를 작성해주세요.**;
{
  const promise = new Promise((resolve, reject) => {
    const condition = true;
    condition ? resolve(`변수: true`) : reject(`변수: false`);
  });

  promise//
    .then((result) => console.log(`6번: ${result}`))
    .catch((result) => console.log(`6번: ${result}`));
}