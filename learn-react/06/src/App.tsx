import tree from "./assets/images/tree.jpg";
export default function App() {
  return (
    <>
      {/* 이미지 넣기 */}
      <img src={tree} alt="" />
      {/* 백그라운드 이미지 넣기 */}
      <div className="w-60 h-60" style={{ background: `url(${tree})` }}></div>
    </>
  );
}
