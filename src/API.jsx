const getPokemonsAndAbilities = (limit, offset) => {
  try {
    const pokemons = fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    )
      .then((response) => 
       response.json())
      .then((data) => {
        console.log(data.results)
        return data.results;
      })
      .catch((error) => {
        console.error(error);
      });
      console.log(pokemons, "testesssss")
    return pokemons;
  } catch (error) {
    throw new Error("An error has occurred" + error)
  }
};

export default getPokemonsAndAbilities;
