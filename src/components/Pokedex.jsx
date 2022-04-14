import { useState, useEffect } from 'react';
import './Pokedex.css';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [pokemonNum, setPokemonNum] = useState(0);

  //https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
  const getData = async () => {
    try {
      setIsFetching(true);
      const url = `https://pokeapi.co/api/v2/pokemon?limit=40&offset=${pokemonNum}`;
      console.log('About to send request: ', url);
      const response = await fetch(url);
      const data = await response.json();

      console.log('Response from API: ', data);
      setPokemon(data.results);
      console.log(pokemon);
      setPokemonNum(pokemonNum + 40);
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
        {isFetching === false ? (
          pokemon.map((pokemon) => (
            <ul key={pokemon.name}>
              <li>{pokemon.name}</li>
              {/* , pokemon.front_default */}
            </ul>
          ))
        ) : (
          <span>Your pokemon are getting catched!</span>
        )}
      </div>
      <button className="back-button" onClick={getData}>
        Back
      </button>
      <button className="next-button" onClick={getData}>
        Next
      </button>
    </section>
  );
};

export default Pokedex;
