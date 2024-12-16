export default function CharacterCard({ character }) {
    return (
      <div className="max-w-md bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          <div className="w-1/2">
            <img
              src={character.image}
              alt={character.name}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-between p-4 w-1/2">
            <h2 className="text-xl font-bold mb-2">{character.name}</h2>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-white">Species:</span> {character.species}
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-white">Status:</span> {character.status}
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-white">Location:</span> {character.location.name}
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-white">Origin:</span> {character.origin.name}
            </p>
          </div>
        </div>
      </div>
    );
  }
  