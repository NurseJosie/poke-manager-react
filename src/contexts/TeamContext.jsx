// import { React, createContext, usestate, useContext } from 'react';

// export const TeamContext = createContext({
//   pokemonState: [],
//   teamState: [],
// });

// export const TeamProvider = (props) => {
//   //console.log(props);

//   //const TeamContext = createContext(props.value);
//   const [pokemon, setPokemon] = useContext(TeamContext)['pokemonState'];
//   const [teamMembers, setTeamMembers] = useContext(TeamContext)['teamState'];

//   return (
//     <TeamContext.Provider
//       value={{
//         pokemonState: [pokemon, setPokemon],
//         teamState: [teamMembers, setTeamMembers],
//       }}
//     >
//       {props.children}
//     </TeamContext.Provider>
//   );
// };
