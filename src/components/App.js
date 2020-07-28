import React, { useState } from 'react';
import PokeList from './PokeList';
import pokemonsData from '../data/pokemons.json';

const App = () => {
  const [pokemons] = useState(pokemonsData);

  return <PokeList pokemons={pokemons} />;
};

export default App;
