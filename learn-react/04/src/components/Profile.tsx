import ProfileCardBody from "./ProfileCardBody";
import ProfileCardHeader from "./ProfileCardHeader";

//✅ 프레젠테이션 컴포넌트
//단순히 컴포넌트를 프레젠테이션 해주는 컴포넌트
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
      <ProfileCardHeader bimg={bimg} />
      <ProfileCardBody img={img} name={name} id={id} clickHandler={clickHandler} />
    </>
  );
}
