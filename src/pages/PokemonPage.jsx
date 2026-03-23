import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import PokemonCard from "../components/PokemonCard"

function PokemonPage() {
  const { name } = useParams()
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (!res.ok) throw new Error("Pokémon not found")
        const data = await res.json()
        setPokemon(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [name])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <Link to="/" className="self-start mb-6 text-red-500 hover:underline ml-4">
        ← Back to Pokédex
      </Link>
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && (
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="text-red-500 hover:underline"
          >
            Go back
          </button>
        </div>
      )}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  )
}

export default PokemonPage