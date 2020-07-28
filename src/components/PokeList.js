import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  return (
    <>
      <h1>Mi lista de Pokemon</h1>
      <div>
        {props.pokemons.map((pokemon) => (
          <Pokemon
            className="pokemon__card"
            key={pokemon.id}
            img={pokemon.url}
            name={pokemon.name}
            types={pokemon.types}
          />
        ))}
      </div>
    </>
  );
};

export default PokeList;
