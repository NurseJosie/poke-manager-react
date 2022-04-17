import { useState, useEffect } from 'react';
import './Pokedex.css';
import Team from './Team';

const Pokedex = () => {
  //---------------------------------------------------------------------------------------
  //tillhör pokemon-fetch
  const [pokemon, setPokemon] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [pokemonNum, setPokemonNum] = useState(0);

  // till fetch
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

  // till fetch
  useEffect(() => {
    getData();
  }, [pokemonNum]);

  //---------------------------------------------------------------------------------------
  //till searchbar
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //till search
  const handleSearch = (s) => {
    setSearch(s.target.value);
  };

  // till search
  useEffect(() => {
    const results = pokemon.filter((p) =>
      p.name.toLowerCase().includes(search)
    );

    setPokemon(results);
  }, [search]);

  //---------------------------------------------------------------------------------------
  // till team
  const [teamMembers, setTeamMembers] = useState([]);

  const addPokemon = async (newTeamMember) => {
    await setTeamMembers([...teamMembers, newTeamMember]);
    console.log(teamMembers);
  };

  const getNickname = () => {
    return window.prompt('Please input a nickname!');
  };

  // till team
  const handleClick = async (id) => {
    const nickname = getNickname();
    let newTeamMember = {
      Nickname: nickname,
      Pokémon: pokemon.filter((p) => p.id === id)[0],
    };
    await addPokemon(newTeamMember);
  };

  //-----------------------------------------------------------------------------
  //knappar
  const BackInList = () => {
    return setPokemonNum(pokemonNum - 40);
  };
  const NextInList = () => {
    return setPokemonNum(pokemonNum + 40);
  };
  //-----------------------------------------------------------------------------
  return (
    <section className="pokedex-container">
      <h3>POKÉDEX</h3>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
        <ul key={pokemon.id}>
          {searchResults.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>

      <div className="result-box">
        {isFetching === false ? (
          pokemon.map((pokemon) => (
            <ul key={pokemon.id}>
              <li>
                <p>{'#' + pokemon.id}</p>
                <p>{pokemon.name.toUpperCase()}</p>
                <img src={pokemon.sprites.front_default} />
                {pokemon.abilities.map((ability) => (
                  <ul>
                    <li>{'Abilities: ' + ability.ability.name}</li>
                  </ul>
                ))}
                <button onClick={() => handleClick(pokemon.id)}>
                  Add to TEAM
                </button>
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
