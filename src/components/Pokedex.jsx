import { useState, useEffect } from 'react';
import './Pokedex.css';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  //https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
  const getData = async () => {
    try {
      setIsFetching(true);
      const url = `https://pokeapi.co/api/v2/pokemon?limit=40&offset=0`;
      console.log('About to send request: ', url);
      const response = await fetch(url);
      const data = await response.json();

      console.log('Response from API: ', data);
      setPokemon(data.results.pokemon);
      setIsFetching(false);
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="pokedex-container">
      <h3>POKÉDEX</h3>
      <input type="text" placeholder="Search.." />
      <div className="result-box">
        {pokemon.length > 0 && (
          <ul>
            {pokemon.map((p) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ul>
        )}
      </div>
      <button className="next-button" onClick={getData}>
        Next
      </button>
    </section>
  );
};

export default Pokedex;
