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
import { TeamProvider, TeamContext } from './contexts/TeamContext';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Navbar />

        <main>
          <TeamProvider value={TeamContext}>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Pokedex" element={<Pokedex />} />
              <Route path="/Team" element={<Team />} />
            </Routes>
          </TeamProvider>

          <SidebarRight />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
