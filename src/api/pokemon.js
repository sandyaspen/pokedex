export const fetchPokemonList = async (limit = 151) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  if (!res.ok) throw new Error("Failed to fetch Pokémon list")
  const data = await res.json()
  return data.results.map((pokemon, index) => ({
    name: pokemon.name,
    id: index + 1
  }))
}

export const fetchPokemon = async (name) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  if (!res.ok) throw new Error("Pokémon not found")
  return res.json()
}