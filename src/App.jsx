import { useEffect, useState } from "react"
import getPokemonsAndAbilities from "./API"
import Header from "./components/Header";
import CardList from "./components/CardList";
import ButtonGroup from "./components/ButtonGroup";


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSprites, setPokemonSprites] = useState([])
  const limit=20;
  const offsets=20;
 useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offsets}`)
  .then((response) => response.json())
  .then((data) => {
    setPokemons(data.results); // Atualiza o estado
    console.log(data.results, "pokemons"); // Use o valor atualizado
  })
  .catch((error) => {
    console.error(error);
  });
}, []);



  return (
    <>
     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"></link>
    <div>
      <Header></Header>
      <ButtonGroup></ButtonGroup>
      <CardList pokemons = {pokemons} offsets = {offsets}></CardList>
    </div>
      
    </>
  )
}

export default App
