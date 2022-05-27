const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemon = () => {};

export const getPokemons = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data.results;
};

export const getPokemonsData = () => {};
