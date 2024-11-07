import { useEffect, useState } from "react";

const localcache = {};

export default function useAnimalBreed(animal) {
  const [animalBreed, setAnimalBreed] = useState([]);
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    if (localcache[animal]) {
      setAnimalBreed(localcache[animal]);
    } else {
      fetchBreedFromAPI();
    }
  }, [animal]);

  async function fetchBreedFromAPI() {
    setAnimalBreed([]);
    setStatus("LOADING");
    const result = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}`
    );
    const { pets } = await result.json();
    console.log("API Response", pets);
    const filteredBreeds = pets.filter((pet) => {
      console.log(pet.animal, animal);
      return pet.animal === animal;
    });
    localcache[animal] = filteredBreeds || [];
    setAnimalBreed(filteredBreeds);
    setStatus("Loaded");
  }

  return [animalBreed, status];
}
