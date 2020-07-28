import React from 'react';
import '../stylesheets/Pokemon.scss';

const Pokemon = (props) => {
  return (
    <div className="pokemonCard">
      <img src={props.img} alt={props.name} className="pokemonCard__img"></img>
      <h2 className="pokemonCard__name">{props.name}</h2>
      <div>
        {props.types.map((type) => (
          <p key={type} className="pokemonCard__type">
            {type}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
