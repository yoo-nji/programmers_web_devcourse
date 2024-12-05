import MovieArea from "./components/MovieArea";
import MovieHeader from "./components/MovieHeader";
import MovieMain from "./components/MovieMain";

export default function App() {
  return (
    <>
      {/* 헤더 */}
      <MovieHeader />
      {/* 메인 */}
      <MovieMain />
      {/* 무비 에어리어 */}
      <MovieArea />
    </>
  );
}
