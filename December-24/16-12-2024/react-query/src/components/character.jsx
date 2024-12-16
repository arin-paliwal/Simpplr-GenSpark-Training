// import axios from "axios";
// import { useEffect, useState } from "react";
// import CharacterCard from "./character-card";

// export default function CharacterPage() {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [pageInfo, setPageInfo] = useState({});

//   async function fetchData(pageNumber) {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `https://rickandmortyapi.com/api/character?page=${pageNumber}`
//       );
//       setCharacters(response.data.results);
//       setPageInfo(response.data.info);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchData(page);
//   }, [page]);

//   const handlePrev = () => {
//     if (page > 1) setPage(page - 1);
//   };

//   const handleNext = () => {
//     if (page < pageInfo.pages) setPage(page + 1);
//   };

//   return (
//     <div className="min-h-screen bg-[#1a1a2e] text-white p-8">
//       <h1 className="text-5xl font-extrabold text-center mb-12 text-[#4ecca3]">Rick and Morty Characters</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//         {loading ? (
//           <h2 className="text-center text-2xl col-span-full">Loading...</h2>
//         ) : error ? (
//           <h2 className="text-center text-2xl col-span-full">Error: {error}</h2>
//         ) : (
//           characters.map((character) => (
//             <CharacterCard key={character.id} character={character} />
//           ))
//         )}
//       </div>
//       <div className="flex justify-center space-x-4">
//         <button
//           onClick={handlePrev}
//           disabled={page === 1}
//           className={`px-4 py-2 rounded-lg text-white font-bold ${
//             page === 1
//               ? "bg-gray-500 cursor-not-allowed"
//               : "bg-blue-500 hover:bg-blue-600"
//           }`}
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={page === pageInfo.pages}
//           className={`px-4 py-2 rounded-lg text-white font-bold ${
//             page === pageInfo.pages
//               ? "bg-gray-500 cursor-not-allowed"
//               : "bg-blue-500 hover:bg-blue-600"
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import CharacterCard from "./character-card";
import { useQuery } from "react-query";
import { useState } from "react";

export default function CharacterPage() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
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
            Error: {error.message}
          </h2>
        ) : (
          data.results.map((character) => (
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
}
