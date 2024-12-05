import { star, thumbnail01 } from "../assets/assets";

export default function MovieItem() {
  return (
    <>
      <div>
        <img src={thumbnail01} alt="" className="rounded-md w-full" />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4 className="">SuperMan</h4>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <img
              src={star}
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-yellow-500">9.1</span>
          </div>
          <span className="text-yellow-500 font-bold">2022</span>
        </div>
      </div>
    </>
  );
}
