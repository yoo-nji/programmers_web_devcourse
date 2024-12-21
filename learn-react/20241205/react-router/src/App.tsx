import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import About from "./pages/About";
import Login from "./pages/Login";

export default function App() {
  return (
    //✅ Routes는 무조건 한 개다
    //Route는 중첩이 가능하다
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      {/* !! 중첩라우트 */}
      {/* 라우트를 중첩해서 사용하는데, path, element 속성 둘 다 사용하면 중첩라우트라고 함 */}
      {/* route prefixes */}
      {/* 라우트를 중첩해서 사용하는데, path 속성만 사용하면 prefixes라고 함 */}
      <Route path="user">
        <Route path="login" element={<Login />} />
        <Route path="regiser" element={<h1>Regiser</h1>} />
      </Route>
    </Routes>
  );
}
