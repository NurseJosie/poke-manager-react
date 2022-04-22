import { useState, useEffect } from 'react';
import '../styles/Pokedex.css';

const Pokedex = ({ teamMembers, setTeamMembers }) => {
  // FETCHING ---------------------------------------------------------------------------------------
  const [isFetching, setIsFetching] = useState(false);
  const [pokemonNum, setPokemonNum] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  const getData = async () => {
    try {
      setIsFetching(true);
      const url = `https://pokeapi.co/api/v2/pokemon?limit=40&offset=${pokemonNum}`;
      const response = await fetch(url);
      const data = await response.json();

      let pokemonTemp = [];
      for (let i = 0; i < data.results.length; i++) {
        await fetch(data.results[i].url).then(async (response) => {
          const pokeJson = await response.json();
          const newPokemon = {
            id: pokeJson.id,
            Name: pokeJson.name,
            Image: pokeJson.sprites.front_default,
            Abilities: pokeJson.abilities,
          };
          pokemonTemp.push(newPokemon);
        });
      }
      setPokemon(pokemonTemp);
      setIsFetching(false);
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    getData();
  }, [pokemonNum]);

  // SEARCHBAR ---------------------------------------------------------------------------------------
  const [search, setSearch] = useState('');
  const searchResults = [];

  const handleSearch = (s) => {
    setSearch(s.target.value);
  };

  useEffect(() => {
    if (search.length) {
      const results = pokemon.filter((p) =>
        p.Name.toLowerCase().includes(search)
      );
      setPokemon(results);
    } else {
      getData();
    }
  }, [search]);

  // TEAM ---------------------------------------------------------------------------------------
  useEffect(() => {}, [teamMembers, setTeamMembers]);

  const getNickname = () => {
    return window.prompt('Please input a nickname!');
  };

  const handleClick = (id) => {
    const nickname = getNickname();
    let newTeamMember = {
      Nickname: nickname,
      Pokemon: pokemon.filter((p) => p.id === id)[0],
    };

    setTeamMembers((prevTeam) => [...prevTeam, newTeamMember]);
    console.log(newTeamMember, teamMembers);
  };

  // BUTTONS -----------------------------------------------------------------------------
  const BackInList = () => {
    return setPokemonNum(pokemonNum - 40);
  };
  const NextInList = () => {
    return setPokemonNum(pokemonNum + 40);
  };

  //-----------------------------------------------------------------------------
  return (
    <section className="container">
      <h2>POKÉDEX</h2>
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
        <ul>
          {isFetching === false ? (
            pokemon.map((pokemon) => (
              <li key={pokemon.id}>
                <p>{'#' + pokemon.id}</p>
                <p>{pokemon.Name}</p>
                <img src={pokemon.Image} className="poke-img" />
                {pokemon.Abilities.map((ability) => (
                  <ul key={ability.ability.name}>
                    <li>{'Abilities: ' + ability.ability.name}</li>
                  </ul>
                ))}
                <button onClick={() => handleClick(pokemon.id)}>
                  Add to TEAM
                </button>
              </li>
            ))
          ) : (
            <p>Fetching Pokemon...</p>
          )}
        </ul>
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
