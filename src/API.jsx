const getPokemonsAndAbilities = (limit, offset) => {
  try {
    return fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return data.json();
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    throw new Error("An error has occurred" + error)
  }
};

export default getPokemonsAndAbilities;
