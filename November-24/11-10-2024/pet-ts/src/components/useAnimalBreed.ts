import { useEffect, useState } from "react";
import { LocalCache, PetType } from "../types/types";

const localcache: LocalCache = {};

export default function useAnimalBreed(animal: string): [PetType[], string] {
  const [animalBreed, setAnimalBreed] = useState<PetType[]>([]);
  const [status, setStatus] = useState<string>("Loading");

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

    try {
      const result = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}`
      );
      const { pets }: { pets: PetType[] } = await result.json();
      console.log("API Response", pets);

      const filteredBreeds = pets.filter((pet) => pet.animal === animal);
      localcache[animal] = filteredBreeds;
      setAnimalBreed(filteredBreeds);
      setStatus("Loaded");
    } catch (error) {
      console.error("Error fetching breed data:", error);
      setStatus("Error");
    }
  }

  return [animalBreed, status];
}
