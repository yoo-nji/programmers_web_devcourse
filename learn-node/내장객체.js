//Node.JS
//내장 객체
//1.1 Node.JS 환경에서 기본으로 제공되는 객체
//1.2 별도로 require이나 import와 같은 문법을 사용하지 않아도 됨
//1.3 언제 어디서든 접근해서 사용할 수 있음

//global
{
  // console.log(global);
  global.appName = "My App";
  console.log(global.appName);
}

//console 객체
{
  // console.log(console);
  //자주 사용되는 것들
  console.log('일반 로그');           // 일반 출력
  console.error('에러 메시지');        // 에러 출력
  console.warn('경고 메시지');         // 경고 출력
  console.info('정보 메시지');         // 정보 출력
  console.table([{ name: 'Node' }, { name: 'React' }]);  // 객체 표 형태로 출력
  console.time('timer');  // 타이머 시작
  setTimeout(() => {
    console.timeEnd('timer');  // 타이머 종료 및 경과 시간 출력
  }, 500);
}

//timer
{
  //setTimeout
  setTimeout(() => console.log('2초 후 실행'), 2000);

  //setInterval
  let count = 0;
  const interval = setInterval(() => {
    console.log(`1초마다 실행: ${++count}`);
    if (count === 5) clearInterval(interval);  // 5회 후 중단
  }, 1000);

  //setImmediate
  setImmediate(() => console.log('이벤트 루프 종료 후 즉시 실행'));
}

//__filename, __dirname
{
  console.log(__filename);
  console.log(__dirname);
  // __filename: 현재 실행 중인 파일의 경로
  // __dirname: 현재 실행 중인 파일이 있는 절대 경로
}

//module.exports

//require

//process
//모듈이 돌아가고 있는 환경 정보가 나와있음
{
  //환경변수
  process.env.NODE_ENV = "development"; //관용적으로 NODE_ENV라는 이름을 많이 씀
  console.log(process.env.NODE_ENV);
  console.log(process.cwd());  // 현재 실행 중인 디렉터리 경로
}


//내장 모듈
