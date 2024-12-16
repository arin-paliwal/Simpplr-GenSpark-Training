import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import CharacterCard, { Character } from "./character-card";

const CharacterPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const fetchCharacters = async ({
    queryKey,
  }: {
    queryKey: (string | number)[];
  }) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.data;
  };

  const { data, isLoading, isError, error, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (data && page < data.info.pages) setPage(page + 1);
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white p-8">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-[#4ecca3]">
        Rick and Morty Characters
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {isLoading ? (
          <h2 className="text-center text-2xl col-span-full">Loading...</h2>
        ) : isError ? (
          <h2 className="text-center text-2xl col-span-full">
            Error: {(error as Error).message}
          </h2>
        ) : (
          data?.results.map((character: Character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handlePrev}
          disabled={page === 1 || isPreviousData}
          className={`px-4 py-2 rounded-lg text-white font-bold ${
            page === 1 || isPreviousData
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={isPreviousData || (data && page === data.info.pages)}
          className={`px-4 py-2 rounded-lg text-white font-bold ${
            isPreviousData || (data && page === data.info.pages)
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterPage;
