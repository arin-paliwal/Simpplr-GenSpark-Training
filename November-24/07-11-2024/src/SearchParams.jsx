import { useEffect, useState } from "react";
import Pet from "./Pet";
import useAnimalBreed from "./useBreed";

const ANIMALS = ["bird", "dog", "cat", "horse", "rabbit", "reptile", "fish"];

export default function SearchParams() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="max-w-8xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-indigo-600 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Find Your Perfect Pet
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-indigo-100"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-indigo-700 border border-indigo-500 rounded-md text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter location"
                />
              </div>
              <div>
                <label
                  htmlFor="animal"
                  className="block text-sm font-medium text-indigo-100"
                >
                  Animal
                </label>
                <select
                  id="animal"
                  value={animal}
                  onChange={(e) => {
                    setAnimal(e.target.value);
                    setBreed("");
                  }}
                  className="mt-1 block w-full px-3 py-2 bg-indigo-700 border border-indigo-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="">Select an animal</option>
                  {ANIMALS.map((animal) => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="breed"
                  className="block text-sm font-medium text-indigo-100"
                >
                  Breed
                </label>
                <select
                  id="breed"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-indigo-700 border border-indigo-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="">Select a breed</option>
                  {breedData.map((breed) => (
                    <option key={breed.name} value={breed.name}>
                      {breed.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={fetchPetsFromAPI}
                className="w-full bg-white text-indigo-600 py-2 px-4 rounded-md font-semibold hover:bg-indigo-50 transition duration-300"
              >
                Search
              </button>
            </form>
            <div className="mt-4 text-center text-indigo-200">{status}</div>
          </div>
          <div className="md:w-2/3 p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Available Pets
            </h3>
            <div className="space-y-6">
              {pets.map((pet) => (
                <Pet key={pet.id} {...pet} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
