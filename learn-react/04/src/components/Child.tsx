interface ChildPropsType {
  // test1: string;
  // test2: number;
  // test3: string[];
  // test4: { name: string; age: number };
  // test5: boolean;
  test6: () => void;
}

export default function Child(props: ChildPropsType) {
  console.log(props);
  return (
    <div className="text-3xl">
      {/* <h1>{props.test1}</h1> */}
      {/* <h1>{props.test2}</h1> */}
      {/* <h1>{props.test3}</h1> */}
      {/* <h1>{JSON.stringify(props.test4)}</h1> */}
      {/* <h1>{props.test5 ? "로그인 됨" : "로그인 안 됨"}</h1> */}
    </div>
  );
}
