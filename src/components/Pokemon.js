import React from 'react';

const Pokemon = (props) => {
  console.log(props.types);
  return (
    <div>
      <img src={props.img} alt={props.name}></img>
      <h2>{props.name}</h2>
      <div>
        {props.types.map((type) => (
          <p className="pokemon__type">{type}</p>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
