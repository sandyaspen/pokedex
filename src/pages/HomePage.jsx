import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query"
import PokemonList from '../components/PokemonList'
import { fetchPokemonList } from "../api/pokemon"

function HomePage() {
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState('')
    const navigate = useNavigate()

    const { data: pokemonList = [], isLoading, isError } = useQuery({
        queryKey: ["pokemonList"],
        queryFn: () => fetchPokemonList(),
        staleTime: Infinity
    })

    //Derived State
    const filteredList = pokemonList.filter(p => p.name.includes(filter.toLowerCase()))
      
    const handleSelect = (name) => {
        navigate(`/pokemon/${name}`)
    }   

    const handleSearch = (e) => {
        e.preventDefault()
        if (query) navigate(`/pokemon/${query.toLowerCase()}`)
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
          onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
        <PokemonList 
            pokemonList={filteredList} 
            onSelect={handleSelect} 
            filter={filter} 
            onFilterChange={setFilter}
        />
    </div>
    )
}

export default HomePage