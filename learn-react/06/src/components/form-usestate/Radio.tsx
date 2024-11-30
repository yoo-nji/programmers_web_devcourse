import { useState } from "react";

export default function Radio() {
  const [radio, setRadio] = useState("male");
  return (
    <>
      <h1>{radio}</h1>
      <input
        type="radio"
        name="gender"
        value="male"
        defaultChecked
        onChange={(e) => setRadio(e.target.value)}
      />{" "}
      male
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={(e) => setRadio(e.target.value)}
      />{" "}
      female
    </>
  );
}
