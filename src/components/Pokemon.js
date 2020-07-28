import React from 'react';
import '../stylesheets/Pokemon.scss';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  return (
    <div className="pokemonCard">
      <img src={props.img} alt={props.name} className="pokemonCard__img"></img>
      <h2 className="pokemonCard__name">{props.name}</h2>
      <div className="pokemonCard__types">
        {props.types.map((type) => (
          <p key={type} className="pokemonCard__type">
            {type}
          </p>
        ))}
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
};

export default Pokemon;
