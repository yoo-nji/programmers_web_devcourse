import { css } from "@emotion/css";

export default function App() {
  return (
    <>
      <h1
        className={css`
        font-size: 30px;
        color: rebeccapurple;
        text-decoration: line-through;
        &:hover{
          color: #0f8200;
          text-decoration: none;
        }
      `}
      >
        hello, react
      </h1>
      <h1>hello, emotion!</h1>
    </>
  );
}
