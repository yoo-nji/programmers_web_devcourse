//React.memo() //고차함수 => 컴포넌트를 반환하는 함수

import A from "./components/A";
import { initialItems } from "./utils/utils";

//리액트훅
//useCallback()
//useMemo()
export default function App() {
  console.log("App Rendering");
  const selectedItems = initialItems.find((item) => item.selected);
  console.log(selectedItems);
  return (
    <>
      <h1>APP: {selectedItems?.id}</h1>
      <A />
    </>
  );
}
