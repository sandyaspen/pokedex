import TypeIndicator from './TypeIndicator'

function PokemonCard({ pokemon }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-72 hover:bg-gray-50 transition-transform transform hover:scale-105">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-32 h-32"
          />
          <h2 className="text-2xl font-bold capitalize mb-4 text-gray-800">{pokemon.name}</h2>
          <div className="w-full">
            <div className="flex items-center justify-center mb-4">
                {pokemon.types.map((type) => (
                    <TypeIndicator type={type.type.name} key={type.type.name} />
                ))}
            </div>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="flex justify-between mb-1">
                <span className="text-gray-500 capitalize">{stat.stat.name}</span>
                <span className="font-semibold text-gray-700">{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
    )
}

export default PokemonCard