// import Profile from "./components/Profile";

// export default function App() {
//   const clickHandler = (name: string) => {
//     alert(`${name}님을 팔로우했습니다`);
//   };
//   return (
//     <article className="card">
//       <Profile
//         bimg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         img="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         name="Sally Ramos"
//         id="@sallytheramos"
//         clickHandler={clickHandler}
//       />
//     </article>
//   );
// }

//----------------------------------------------------------------
//연습문제
import Child from "./components/Child";

export default function App() {
  // const onClick = () => console.log("Click");
  const Header = () => {
    return <h1>Header</h1>;
  };

  const Content = () => {
    return <h1>Content</h1>;
  };

  const Footer = () => {
    return <h1>Footer</h1>;
  };

  return (
    <div className="text-3xl font-bold">
      <h1>App</h1>
      <h1>문제1</h1>
      {/* <Child test1="Hello, World!" /> */}
      <h1>문제2</h1>
      {/* <Child test2={30} /> */}
      <h1>문제3</h1>
      {/* <Child test3={["Apple", "Banana", "Cherry"]} /> */}
      <h1>문제4</h1>
      {/* <Child test4={{ name: "Alice", age: 30 }} /> */}
      <h1>문제5</h1>
      {/* <Child test5={true} /> */}
      <h1>문제6</h1>
      {/* <Child test6={onClick} /> */}
      <h1>문제7</h1>
      {/* <Child test7="전달" /> */}
      <h1>문제8</h1>
      {/* <Child value={"Dd"} /> */}
      <h1>문제9</h1>
      {/* <Child style={{ color: "green" }} /> */}
      <h1>문제10</h1>
      <Child header={<Header />} content={<Content />} footer={<Footer />} />
    </div>
  );
}
