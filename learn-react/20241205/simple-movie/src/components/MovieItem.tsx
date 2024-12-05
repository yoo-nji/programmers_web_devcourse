import { star, thumbnail01 } from "../assets/assets";

export default function MovieItem({
  title,
  release_date,
  poster_path,
  vote_average,
}: MovieItem) {
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}` || thumbnail01}
          alt=""
          className="rounded-md w-full"
        />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4 className="">{title}</h4>
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
            <span className="text-yellow-500">{vote_average.toFixed(1)}</span>
          </div>
          <span className="text-yellow-500 font-bold">
            {release_date.substring(0, 4)}
          </span>
        </div>
      </div>
    </>
  );
}
