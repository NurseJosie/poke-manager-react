import { useState, useEffect, useContext } from 'react';
import '../styles/Team.css';
import Pokedex from '../components/Pokedex';

//if det finns minst 3 pokemon i ett lag, prompt "ditt team är inte redo"
//map props.teamMembers i <li> för att skriva ut laget
// teamMember.pokemon.Name/id/Image... osv...
//
const Team = ({ teamMembers }) => {
  return (
    <section className="team">
      <h3>TEAM</h3>
      <div>
        {teamMembers >= 3 ? (
          teamMembers.teamMembers.map((teamMember) => (
            <ul key={teamMember.pokemon.id}>
              <li>
                <p>{'#' + teamMember.pokemon.id}</p>
                <p>{teamMember.pokemon.Name}</p>
                <img src={teamMember.pokemon.Image} />
                {teamMember.pokemon.Abilities.map((ability) => (
                  <ul key={ability.ability.name}>
                    <li>{'Abilities: ' + ability.ability.name}</li>
                  </ul>
                ))}
              </li>
            </ul>
          ))
        ) : (
          <span>Please add at least three Pokémon to your team!</span>
        )}
        {/* <ul key={pokemon.id}>
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
