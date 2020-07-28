import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';
import PropTypes from 'prop-types';

const PokeList = (props) => {
  return (
    <div className="pokemons">
      <h1 className="pokemons__heading">Mi lista de Pokemon</h1>
      <div className="pokemons__container">
        {props.pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            img={pokemon.url}
            name={pokemon.name}
            types={pokemon.types}
          />
        ))}
      </div>
    </div>
  );
};

PokeList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokeList;
