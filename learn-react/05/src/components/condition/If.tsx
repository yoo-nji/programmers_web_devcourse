import Login from "../Login";
import Logout from "../Logout";

export default function If() {
  //조건부 렌더링
  //표현식에서는 if문을 사용할 수 없음
  const isLoggedIn = true;

  //방법 1
  // if (isLoggedIn) {
  //   return <h2>Hello, Logged In!</h2>;
  // }
  // return <h2>Hello, Guest!</h2>;

  //방법 2: 컴포넌트 사용
  if (isLoggedIn) {
    return <Login />;
  }
  return <Logout />;
}
