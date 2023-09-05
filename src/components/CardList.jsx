import CardPokemon from "./card";
import React from "react";

const CardList = ({pokemons, offsets}) =>{
    const pokemonsWithSprites = pokemons.map((pokemon,i) =>{
        return {
          ...pokemon,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offsets + i +1}.png`
        }
        

      })

      console.log(pokemonsWithSprites)
    return <>
        {}
        <div className="p-10 grid grid-cols-5 gap-16">
        {
        pokemonsWithSprites.map((pokemon, index) => (
        <div className="card" key={index}>
            
           <CardPokemon url= {pokemon.url} name={pokemon.name} sprite={pokemon.sprite}></CardPokemon>
        </div>
      ))}
                
        </div>
    </>

}

export default CardList;