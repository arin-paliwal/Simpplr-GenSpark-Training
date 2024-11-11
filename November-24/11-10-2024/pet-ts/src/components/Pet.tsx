import { PetType } from "../types/types";

export default function Pet({
  name,
  animal,
  breed,
  city,
  state,
  description,
  images,
}: PetType) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {animal} - {breed}
          </div>
          <h2 className="mt-2 text-xl font-semibold text-gray-800">{name}</h2>
          <p className="mt-2 text-gray-600">
            {city}, {state}
          </p>
          <p className="mt-4 text-gray-500">{description}</p>
          <div className="mt-4 flex space-x-2">
            {images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${name} ${index + 2}`}
                className="w-12 h-12 rounded-md object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
