export default function Sustargram() {
  const Array: string[] = [
    "https://cdn.pixabay.com/photo/2017/11/13/07/14/cats-eyes-2944820_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/06/10/55/cat-7245850_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/04/08/31/cats-8105667_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/08/26/01/40/cats-6574788_1280.jpg",
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {Array.map((img, index) => (
          <a key={index} className="group" href="#">
            <img
              src={img}
              width="400"
              height="400"
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
              style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
