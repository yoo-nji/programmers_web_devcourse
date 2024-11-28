//Input.tsx
export default function Input({ placeholder }: { placeholder: string }) {
  return (
    <>
      <input
        className="flex items-center py-[14px] px-4 w-60 h-11 border border-[#4f4f4f] rounded-lg bg-white text-[14px] text-[#ACACAC] font-medium "
        type="text"
        placeholder={placeholder}
      />
    </>
  );
}
