import { useState } from "react";

const ANIMALS = ["bird", "Dog", "Cat", "Horse", "Rabbit", "reptile", "Fish"];
const SearchParams = () => {
  const [location, setLocation] = useState("Udaipur, Rajasthan");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const breeds = ["Havenese", "Mix", "Cockatail", "Lebra"];
  const updateLocation = (e) => {
    setLocation(e.target.value);
  };
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => updateLocation(e)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal, index) => (
              <option value={animal} key={index}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed, index) => (
              <option value={breed} key={index}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
