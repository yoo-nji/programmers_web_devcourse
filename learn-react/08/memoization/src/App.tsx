//React.memo() //고차함수 => 컴포넌트를 반환하는 함수

import A from "./components/A";

//리액트훅
//useCallback()
//useMemo()
export default function App() {
  console.log("App Rendering");

  return (
    <>
      <h1>APP</h1>
      <A />
    </>
  );
}
