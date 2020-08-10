import React from 'react';
import '../stylesheets/Pokemon.scss';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  return (
    <li className="pokemonCard">
      <img src={props.img} alt={props.name} className="pokemonCard__img"></img>
      <h2 className="pokemonCard__name">{props.name}</h2>
      <ul className="pokemonCard__types">
        {props.types.map((type) => (
          <li key={type} className="pokemonCard__type">
            {type}
          </li>
        ))}
      </ul>
    </li>
  );
};

Pokemon.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
};

export default Pokemon;
