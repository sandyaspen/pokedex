    const typeColors = {
        normal: 'bg-orange-300',
        fire: 'bg-red-600',
        water: 'bg-blue-500',
        electric: 'bg-yellow-500',
        grass: 'bg-green-500',
        ice: 'bg-cyan-500',
        fighting: 'bg-orange-500',
        poison: 'bg-purple-500',
        ground: 'bg-yellow-700',
        flying: 'bg-sky-300',
        psychic: 'bg-purple-900',
        bug: 'bg-green-700',
        rock: 'bg-gray-700',
        ghost: 'bg-fuchsia-700',
        dragon: 'bg-orange-900',
        dark: 'bg-gray-800',
        steel: 'bg-gray-600',
        fairy: 'bg-pink-300'
}

function TypeIndicator({ type }) {

    return (
        <span className={`px-3 py-1 mx-1 rounded-full text-white text-xs font-semibold capitalize ${typeColors[type]}`}>
            {type}
        </span>
    )
}

export default TypeIndicator