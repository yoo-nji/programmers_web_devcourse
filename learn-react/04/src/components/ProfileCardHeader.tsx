export default function ProfileCardHeader({ bimg }: { bimg: string }) {
  return (
    <div>
      <img className="card-img" src={bimg} alt="background-pic" />
    </div>
  );
}
