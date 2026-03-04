import { useState } from 'react'
import PokemonCard from './PokemonCard'
import './App.css'

function App() {
  const [query, setQuery] = useState("")
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchPokemon = async () => {
    if (!query) return
    setLoading(true)
    setError(null)
    setPokemon(null)

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
      if (!res.ok) throw new Error("Pokémon not found")
      const data = await res.json()
      setPokemon(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-red-500 mb-8">Pokédex</h1>

      <div className="flex gap-2 mb-8">
        <input
          className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700"
          type="text"
          placeholder="Search Pokémon..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchPokemon()}
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          onClick={searchPokemon}
        >
          Search
        </button>
      </div>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {pokemon && (<PokemonCard pokemon={pokemon} />)}
    </div>
  )
}

export default App
