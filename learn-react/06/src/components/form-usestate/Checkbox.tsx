import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h1>{checked ? "체크됨" : "체크안됨"}</h1>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </>
  );
}
