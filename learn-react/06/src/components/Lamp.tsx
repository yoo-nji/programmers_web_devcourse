import { useState } from "react";
import off from "../assets/images/b_off.png";
import on from "../assets/images/b_on.png";

export default function Lamp() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn((isOn) => !isOn);
  };

  return (
    <>
      <img onClick={toggleLight} src={isOn ? on : off} alt="전구이미지" />
    </>
  );
}
