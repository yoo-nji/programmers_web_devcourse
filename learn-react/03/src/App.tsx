import styled from "styled-components";

const HelloWord = styled.h1`
font-size: 30px;
color: blue;
`;

export default function App() {
  return (
    <>
      <div>
        <HelloWord> hello</HelloWord>
        <h1>hello, react!</h1>
        <h2>react, styling!</h2>
      </div>
    </>
  );
}
