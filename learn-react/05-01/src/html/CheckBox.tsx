import { twMerge } from "tailwind-merge";

export default function CheckBox({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex items-center text-white gap-2">
      <input
        type="checkbox"
        id="chk"
        className={twMerge(
          `w-5 h-5 appearance-none border border-[#4f4f4f] bg-white checked:bg-[#4f4f4f] rounded-[5px] checked:bg-[url('./check-icon.svg')] checked:bg-no-repeat checked:bg-center`
        )}
      />
      <label htmlFor="chk">{children}</label>
    </div>
  );
}
