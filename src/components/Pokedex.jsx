import { useState, useEffect } from 'react';
import './Pokedex.css';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [pokemonNum, setPokemonNum] = useState(0);

  const BackInList = () => {
    return setPokemonNum(pokemonNum - 40);
  };

  const NextInList = () => {
    return setPokemonNum(pokemonNum + 40);
  };

  //https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
  const getData = async () => {
    try {
      setIsFetching(true);
      const url = `https://pokeapi.co/api/v2/pokemon?limit=40&offset=${pokemonNum}`;
      console.log('About to send request: ', url);
      const response = await fetch(url);
      const data = await response.json();

      console.log('Response from API: ', data);
      //setPokemon(data.results);
      let pokemonTemp = [];
      for (let i = 0; i < data.results.length; i++) {
        await fetch(data.results[i].url).then(async (response) => {
          console.log(response);
          const pokeJson = await response.json();
          pokemonTemp.push(pokeJson);
        });
      }
      console.log(pokemonTemp);
      setPokemon(pokemonTemp);
      console.log(pokemon);
      setIsFetching(false);
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    getData();
  }, [pokemonNum]);

  return (
    <section className="pokedex-container">
      <h3>POKÉDEX</h3>
      <div className="search-bar">
        <input type="text" placeholder="Search.." />
      </div>

      <div className="result-box">
        {isFetching === false ? (
          pokemon.map((pokemon) => (
            <ul key={pokemon.id}>
              <li>
                {'#' + pokemon.id + ' ' + pokemon.name}
                <img src={pokemon.sprites.front_default} />
                {pokemon.abilities.map((ability) => (
                  <ul>
                    <li>{'Abilities: ' + ability.ability.name}</li>
                  </ul>
                ))}
              </li>
            </ul>
          ))
        ) : (
          <span>Fetching Pokemon...</span>
        )}
      </div>
      <div className="buttons">
        <button className="back-button" onClick={BackInList}>
          Back
        </button>
        <button className="next-button" onClick={NextInList}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Pokedex;
