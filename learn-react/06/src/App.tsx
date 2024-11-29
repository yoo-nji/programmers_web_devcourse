import { useState } from "react";

// export default function App() {
//   // 자바스크립트 변수
//   // let count = 0;

//   //리액트 변수
//   //useState 훅은 상태와 상태 업데이트 함수를 배열로 반환

//   //비구조화할당으로 받아서 처리함
//   //[상태, 상태 업데이트하는 함수 ] = useState(초기값)
//   //상태: 현재 값(초기값으로 useState훅의 인자가 들어감)
//   // 상태 업데이트 함수: 상태의 값을 변경할 떄 사용되는 함수
//   const [count, setCount] = useState(0);
//   //이름은 내 마음대로 지어줘도 됨
//   //✅일반적으로 상태명이 count라면 상태 업데이트 함수는 setCount로 지음

//   const increment = () => {
//     setCount(() => count + 1);
//   };

//   // 리액트는 불변성을 지켜줘야 됨 -> 값이 한번 생성된 후에 변경되지 않는 특성
//   //students 값을 직접적으로 바꾸면 안 됨
//   //ex) students.push("smith") ❌
//   // 해결: 새로운 값을 만들어서 다시 할당
//   const [students, setstudents] = useState(["james", "john"]);
//   const addStudent = () => {
//     // ❌ 이전값 무시하고 smith만 출력
//     // setstudents(["smith"]);
//     // ✅ 이전값 참조하며 smith 추가
//     setstudents((students) => [...students, "smith"]);
//   };

//   return (
//     <div>
//       <h1>count: {count}</h1>
//       <button onClick={increment}>증가</button>
//       <ul>
//         {students.map((student, index) => (
//           <li key={index}>{student}</li>
//         ))}
//       </ul>
//       <button onClick={addStudent}>학생 추가</button>
//     </div>
//   );
// }

interface User {
  name: string;
  age: number;
  gender?: string;
}

export default function App() {
  const [user, setUser] = useState<User>({ name: "john", age: 20 });
  const changeUser = () => {
    // 💡타입추론 그대로 두면 문제가 됨, 기존에 name과 age만 타입추론이 되었는데 갑자기 gender가 추가됐기 때문
    setUser((user) => ({ ...user, gender: "male" }));
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.gender}</h1>
      <button onClick={changeUser}>변경</button>
    </div>
  );
}
