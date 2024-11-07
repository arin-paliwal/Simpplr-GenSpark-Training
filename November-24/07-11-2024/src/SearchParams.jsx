import { useEffect, useState } from "react";
import Pet from "./Pet";
import useAnimalBreed from "./useBreed";

const ANIMALS = ["bird", "dog", "cat", "horse", "rabbit", "reptile", "fish"];

const SearchParams = () => {
  const [location, setLocation] = useState("Udaipur, Rajasthan");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breedData, status] = useAnimalBreed(animal);

  useEffect(() => {
    fetchPetsFromAPI();
  }, [animal]);

  const fetchPetsFromAPI = async () => {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}`
    );
    const { pets } = await response.json();
    setPets(pets);
  };

  return (
    <div className="flex p-6 gap-6 bg-white justify-center">
      <form className="w-1/2 flex flex-col gap-4">
        <label className="block">
          <span className="text-gray-700">Location</span>
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Animal</span>
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <option />
            {ANIMALS.map((animal, index) => (
              <option key={index} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-gray-700">Breed</span>
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <option />
            {breedData.map((breed, index) => (
              <option key={index} value={breed.name}>
                {breed.name}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          onClick={fetchPetsFromAPI}
          className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
        <div className="text-center text-gray-500">{status}</div>
      </form>
      <div className="w-1/2 mt-6 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">
                Name
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">
                Animal
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">
                Breed
              </th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <Pet
                key={pet.id}
                name={pet.name}
                animal={pet.animal}
                breed={pet.breed}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchParams;
