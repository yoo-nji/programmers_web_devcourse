import { useState } from "react";

export default function ColorBox() {
  //실시간으로 입력값이 반영되기 때문에 제어컴포넌트방식으로 진행
  const [color, setColor] = useState("#000");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <>
      <h1>{color}</h1>
      <div className="item-middle">
        <div className="flex flex-col">
          <div
            className="w-40 h-40 border border-slate-500"
            style={{ backgroundColor: color }}
          ></div>
          <input
            onChange={(e) => setColor(e.target.value)}
            type="text"
            value={color}
            className="border border-slate-500 w-40 mt-2"
          />
        </div>
      </div>
    </>
  );
}
