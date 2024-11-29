export default function App() {
  let count = 0;
  const increment = () => {
    count += 1;
    console.log(count);
  };
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={increment}>증가</button>
    </div>
  );
}
