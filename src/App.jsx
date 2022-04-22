import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './components/Team';
import Pokedex from './components/Pokedex';
import Home from './components/Home';
import Header from './components/Header';
import SidebarRight from './components/SidebarRight';
import Navbar from './components/Navbar';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route
              path="/Pokedex"
              element={
                <Pokedex
                  teamMembers={teamMembers}
                  setTeamMembers={setTeamMembers}
                />
              }
            />
            <Route
              path="/Team"
              element={
                <Team
                  teamMembers={teamMembers}
                  setTeamMembers={setTeamMembers}
                />
              }
            />
          </Routes>

          <SidebarRight />
        </main>
      </div>
    </Router>
  );
}

export default App;
