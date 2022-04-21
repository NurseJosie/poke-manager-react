import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './components/Team';
import Pokedex from './components/Pokedex';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SidebarRight from './components/SidebarRight';
import Navbar from './components/Navbar';
// import { TeamProvider, TeamContext } from './contexts/TeamContext';

function App() {
  // const [pokemon, setPokemon] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  // set the team members.........
  //   const SetTeamMembers = () => {
  // const addPokemon = "";
  // const getNickname = "";
  // const handleClick = "";
  //     return (
  //      addPokemon = async (newTeamMember) => {
  //         await setTeamMembers([
  //           ...teamMembers,
  //           newTeamMember,
  //         ]);
  //         console.log(teamMembers);
  //       }

  //       getNickname = () => {
  //         return window.prompt('Please input a nickname!');
  //       };

  //       // till team
  //        handleClick = async (id) => {
  //         const nickname = getNickname();
  //         let newTeamMember = {
  //           Nickname: nickname,
  //           Pokémon: pokemon.filter((p) => p.id === id)[0],
  //         };
  //         await addPokemon(newTeamMember);
  //       };
  //     )
  //   }

  return (
    <Router>
      <div className="App">
        <Header />

        <Navbar />

        <main>
          {/* <TeamProvider value={TeamContext}> */}
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route
              path="/Pokedex"
              element={<Pokedex />}
              teamMembers={teamMembers}
              setTeamMembers={setTeamMembers}
            />
            <Route
              path="/Team"
              element={<Team />}
              teamMembers={teamMembers}
              setTeamMembers={setTeamMembers}
            />
          </Routes>
          {/* </TeamProvider> */}

          <SidebarRight />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
