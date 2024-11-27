export default function Profile({
  bimg,
  img,
  name,
  id,
  clickHandler,
}: {
  bimg: string;
  img: string;
  name: string;
  id: string;
  clickHandler: (name: string) => void;
}) {
  return (
    <>
      <div>
        <img className="card-img" src={bimg} alt="background-pic" />
      </div>
      <div className="profile">
        <img className="prof-img" src={img} alt="profile-pic" />
        <h3 className="alias">{name}</h3>
        <p className="username">{id}</p>
        <button onClick={() => clickHandler(name)}>Follow</button>
      </div>
    </>
  );
}
