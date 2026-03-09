function PokemonList({ pokemonList, onSelect }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-48 h-96 overflow-y-auto shrink-0">
        {pokemonList.map((pokemon, index) => (
            <button
                key={pokemon.name}
                onClick={() => onSelect(pokemon.name)}
                className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-500 transition-colors capitalize text-sm border-b border-gray-100"
             >
                <span className="text-gray-400 text-xs mr-2">#{String(index + 1).padStart(3, '0')}</span>
                {pokemon.name}
             </button>
        ))}
        </div>
    )
}

export default PokemonList