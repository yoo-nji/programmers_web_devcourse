interface ChildPropsType {
  // test1: string;
  // test2: number;
  // test3: string[];
  // test4: { name: string; age: number };
  // test5: boolean;
  // test6: () => void;
  // test7?: string;
  // value: string | number | unknown[] | object;
  // style: object;
  header: React.ReactElement;
  content: React.ReactElement;
  footer: React.ReactElement;
}

export default function Child(props: ChildPropsType) {
  // const test7 = props.test7 ?? "홍길동";
  console.log(props);
  return (
    <div className="text-3xl">
      {/* <h1>{props.test1}</h1> */}
      {/* <h1>{props.test2}</h1> */}
      {/* <h1>{props.test3}</h1> */}
      {/* <h1>{JSON.stringify(props.test4)}</h1> */}
      {/* <h1>{props.test5 ? "로그인 됨" : "로그인 안 됨"}</h1> */}
      {/* <button onClick={props.test6}>버튼</button> */}
      {/* <h1>{test7}</h1> */}
      {/* <h1>{JSON.stringify(props.value)}</h1> */}
      {/* <h1 style={props.style}>스타일</h1> */}
      {props.header}
      {props.content}
      {props.footer}
    </div>
  );
}
