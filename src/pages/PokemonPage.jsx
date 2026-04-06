import { useParams, useNavigate, Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import PokemonCard from "../components/PokemonCard"
import { fetchPokemon } from "../api/pokemon"

function PokemonPage() {
  const { name } = useParams()
  const navigate = useNavigate()

  const { data: pokemonData, isLoading, isError, error } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemon(name),
    staleTime: Infinity
  })
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <Link to="/" className="self-start mb-6 text-red-500 hover:underline ml-4">
        ← Back to Pokédex
      </Link>
      {isLoading && <p className="text-gray-500">Loading...</p>}
      {isError && (
        <div className="text-center">
          <p className="text-red-500 mb-4">{error.message}</p>
          <button
            onClick={() => navigate("/")}
            className="text-red-500 hover:underline"
          >
            Go back
          </button>
        </div>
      )}
      {pokemonData && <PokemonCard pokemon={pokemonData} />}
    </div>
  )
}

export default PokemonPage