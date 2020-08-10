import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';
import PropTypes from 'prop-types';

const PokeList = (props) => {
  return (
    <ul className="pokemons">
      <h1 className="pokemons__heading">Mi lista de Pokemon</h1>
      <div className="pokemons__container">
        {props.pokemons.map((pokemon) => (
          <li className="pokemonCard">
            <Pokemon
              key={pokemon.id}
              img={pokemon.url}
              name={pokemon.name}
              types={pokemon.types}
            />
          </li>
        ))}
      </div>
    </ul>
  );
};

PokeList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokeList;
