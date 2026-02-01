import Card from "./Card";

const Gallery = ({ images, isLoading }) => {
  return (
    <div className="relative min-h-[87vh]">
      {isLoading && (
        <h3
          className="text-gray-600 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold"
        >
          Loading...
        </h3>
      )}

      <div className="flex flex-wrap gap-4 py-2">
        {images.map((img) => (
          <Card images={img} key={img.id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
