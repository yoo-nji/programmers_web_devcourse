export default function Loop() {
  // 배열 데이터 생성
  const items = ["apple", "banana", "cherry"];
  return (
    <>
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}
