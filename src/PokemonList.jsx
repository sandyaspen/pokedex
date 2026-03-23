function PokemonList({ pokemonList, onSelect, filter, onFilterChange }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-48 h-96 overflow-y-auto shrink-0">
            <div className="p-2 border-b border-gray-100">
                <input
                    type="text"
                    placeholder="Filter Pokemon..."
                    value={filter}
                    onChange={(e) => onFilterChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700 text-sm"
                />
            </div>
        {pokemonList.map((pokemon, index) => (
            <button
                key={pokemon.name}
                onClick={() => onSelect(pokemon.name)}
                className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-500 transition-colors capitalize text-sm border-b border-gray-100"
             >
                <span className="text-gray-400 text-xs mr-2">#{String(pokemon.id)}</span>
                {pokemon.name}
             </button>
        ))}
        </div>
    )
}

export default PokemonList