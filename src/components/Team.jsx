import '../styles/Team.css';

const Team = ({ teamMembers, setTeamMembers }) => {
  // DELETE --------------------------------------------------------------------------------
  const handleDelete = (index) => {
    console.log(index, teamMembers);
    const team = [
      ...teamMembers.slice(0, index),
      ...teamMembers.slice(index + 1),
    ];
    console.log(team);
    setTeamMembers(team);
  };
  //https:stackoverflow.com/questions/41420333/why-splice-not-working-correctly-in-react

  //-------------------------------------------------------------------------------------------
  return (
    <section className="container">
      <h2>TEAM</h2>
      <div className="team-display">
        <ul>
          {teamMembers.length >= 3 ? (
            teamMembers.map((teamMember, index) => (
              <li key={teamMember.Pokemon.id}>
                <p>{'#' + teamMember.Pokemon.id}</p>
                <p>{teamMember.Nickname}</p>
                <p>{teamMember.Pokemon.Name}</p>
                <img className="poke-img" src={teamMember.Pokemon.Image} />
                <ul>
                  {teamMember.Pokemon.Abilities.map((ability) => (
                    <li key={ability.ability.name}>
                      {'Abilities: ' + ability.ability.name}
                    </li>
                  ))}
                </ul>
                <button
                  className="remove-btn"
                  onClick={() => handleDelete(index)}
                >
                  Remove from Team
                </button>
              </li>
            ))
          ) : (
            <div className="warning">
              <p>Please add at least three Pokémon to your team!</p>
              <p> Current Team Members: {teamMembers.length}</p>
              <img src="./src/assets/025.png" className="pikachu-img" />
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Team;
