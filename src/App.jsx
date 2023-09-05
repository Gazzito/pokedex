import { useState } from "react"
import getPokemonsAndAbilities from "./API"
import Header from "./components/Header";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSprites, setPokemonSprites] = useState([])



  return (
    <>
     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"></link>
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <CardList></CardList>
    </div>
      
    </>
  )
}

export default App
