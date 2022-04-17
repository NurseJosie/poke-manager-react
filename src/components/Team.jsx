import { useState, useEffect } from 'react';
import './Team.css';
import Pokedex from './Pokedex';

const Team = () => {
  return (
    <section className="team">
      <h3>TEAM</h3>
      <div>
        <ul>
          <li>Members of team</li>
        </ul>
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

// {isFetching === false ? (
//   pokemon.map((pokemon) => (
//     <ul key={pokemon.id}>
//       <li>
//         <p>{'#' + pokemon.id}</p>
//         <p>{' ' + pokemon.name}</p>
//         <img src={pokemon.sprites.front_default} />
//         {pokemon.abilities.map((ability) => (
//           <ul>
//             <li>{'Abilities: ' + ability.ability.name}</li>
//           </ul>
//         ))}
//         <button>Add to TEAM</button>
//       </li>
//     </ul>
//   ))
// ) : (
//   <span>Fetching Pokemon...</span>
// )}
// </div>

export default Team;
