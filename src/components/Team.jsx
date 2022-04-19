import { useState, useEffect, useContext } from 'react';
import '../styles/Team.css';
import { TeamContext } from '../contexts/TeamContext';

const Team = () => {
  const [pokemon, setPokemon] = useContext(TeamContext)[pokemonState];
  const [teamMembers, setTeamMembers] = useContext(TeamContext)[teamState];

  const value = useContext(TeamContext);

  return (
    <section className="team">
      <h3>TEAM</h3>
      <div>
        <h3></h3>
        {/* <ul>
          <li>
            Members of team
            <p>ID:</p>
            <p>{'#' + pokemon.id}</p>
            <p>Nickname:</p>
            <p>{nickname}</p>
            <p>Name:</p>
            <p>{pokemon.Name}</p>
            <p>Abilities:</p>
            <p>{pokemon.Abilities}</p>
          </li>
        </ul> */}
      </div>
    </section>
  );
};

// const ViewContact = ({ contact: {name, method, contactInfo} }) => (
// 	<li>
// 		<div> Namn </div>
// 		<div> {name} </div>
// 		<div> {method} </div>
// 		<div> {contactInfo} </div>
// 	</li>
// )

export default Team;
