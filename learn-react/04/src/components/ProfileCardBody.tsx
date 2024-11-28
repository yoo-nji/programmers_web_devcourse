export default function ProfileCardBody({
  img,
  name,
  id,
  clickHandler,
}: {
  img: string;
  name: string;
  id: string;
  clickHandler: (name: string) => void;
}) {
  return (
    <div className="profile">
      <img className="prof-img" src={img} alt="profile-pic" />
      <h3 className="alias">{name}</h3>
      <p className="username">{id}</p>
      <button onClick={() => clickHandler(name)}>Follow</button>
    </div>
  );
}
