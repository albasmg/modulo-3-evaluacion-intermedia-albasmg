import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

const PokeList = (props) => {
  return (
    <>
      <h1>Mi lista de Pokemon</h1>
      <div class="pokemons">
        {props.pokemons.map((pokemon) => (
          <Pokemon
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
