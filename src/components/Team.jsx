import { useState, useEffect } from 'react';
import '../styles/Team.css';

//if det finns minst 3 pokemon i ett lag, prompt "ditt team är inte redo"
//map props.teamMembers i <li> för att skriva ut laget
// teamMember.pokemon.Name/id/Image... osv...
//
const Team = ({ teamMembers, setTeamMembers }) => {
  const handleDelete = (id) => {
    const team = teamMembers.filter((member) => member.Pokemon.id !== id);
    setTeamMembers(team);
  };

  return (
    <section className="team">
      <h3>TEAM</h3>
      <div>
        <ul>
          {teamMembers.length >= 3 ? (
            teamMembers.map((teamMember) => (
              <li key={teamMember.Pokemon.id}>
                <p>{'#' + teamMember.Pokemon.id}</p>
                <p>{teamMember.Pokemon.Name}</p>
                <img src={teamMember.Pokemon.Image} />
                <ul>
                  {teamMember.Pokemon.Abilities.map((ability) => (
                    <li key={ability.ability.name}>
                      {'Abilities: ' + ability.ability.name}
                    </li>
                  ))}
                </ul>
                <button onClick={() => handleDelete(teamMember?.Pokemon.id)}>
                  Remove from Team
                </button>
              </li>
            ))
          ) : (
            <span>
              Please add at least three Pokémon to your team! Current Team
              Members: {teamMembers.length}
            </span>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Team;
