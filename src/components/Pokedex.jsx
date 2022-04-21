import { useState, useEffect } from 'react';
import '../styles/Pokedex.css';

const Pokedex = ({ teamMembers, setTeamMembers }) => {
  //---------------------------------------------------------------------------------------
  //tillhör pokemon-fetch
  const [isFetching, setIsFetching] = useState(false);
  const [pokemonNum, setPokemonNum] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  const getData = async () => {
    try {
      //console.log(pokemon);
      setIsFetching(true);
      const url = `https://pokeapi.co/api/v2/pokemon?limit=40&offset=${pokemonNum}`;
      // console.log('About to send request: ', url);
      const response = await fetch(url);
      const data = await response.json();

      //console.log('Response from API: ', data);
      //setPokemon(data.results);

      let pokemonTemp = [];

      for (let i = 0; i < data.results.length; i++) {
        await fetch(data.results[i].url).then(async (response) => {
          //console.log(response);
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

  //---------------------------------------------------------------------------------------
  //till searchbar
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

  //---------------------------------------------------------------------------------------
  // till team
  // const addPokemon = (newTeamMember) => {
  //   setTeamMembers((prevTeam) => [...prevTeam, newTeamMember]);
  //   //console.log(teamMembers.teamMembers);
  // };

  useEffect(() => {}, [teamMembers, setTeamMembers]);

  const getNickname = () => {
    return window.prompt('Please input a nickname!');
  };

  // till team
  const handleClick = (id) => {
    const nickname = getNickname();
    let newTeamMember = {
      Nickname: nickname,
      Pokemon: pokemon.filter((p) => p.id === id)[0],
    };

    setTeamMembers((prevTeam) => [...prevTeam, newTeamMember]);
    console.log(newTeamMember, teamMembers);
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
                <p>{pokemon.Name}</p>
                <img src={pokemon.Image} />
                {pokemon.Abilities.map((ability) => (
                  <ul key={ability.ability.name}>
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
