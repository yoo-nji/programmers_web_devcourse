import { useState } from "react";

export default function Select() {
  const [select, setSelect] = useState("orange");
  return (
    <>
      <h1>{select}</h1>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select>
    </>
  );
}
