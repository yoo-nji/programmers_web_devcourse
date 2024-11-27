import Profile from "./components/Profile";

export default function App() {
  const clickHandler = (name: string) => {
    alert(`${name}님을 팔로우했습니다`);
  };
  return (
    <article className="card">
      <Profile
        bimg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        img="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Sally Ramos"
        id="@sallytheramos"
        clickHandler={clickHandler}
      />
    </article>
  );
}
