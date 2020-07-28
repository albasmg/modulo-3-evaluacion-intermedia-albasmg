import React, { useState } from 'react';
import PokeList from './PokeList';
import '../stylesheets/App.scss';
import pokemonsData from '../data/pokemons.json';

const App = () => {
  const [pokemons] = useState(pokemonsData);

  return <PokeList pokemons={pokemons} />;
};

export default App;
