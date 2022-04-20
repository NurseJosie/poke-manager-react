import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <section className="dropdown">
      <button className="dropbtn">MENU</button>
      <nav className="dropdown-content">
        <Link to="/Home">HOME</Link>
        <Link to="/Pokedex">Pokédex</Link>
        <Link to="/Team">TEAM</Link>
      </nav>
    </section>
  );
};

export default Navbar;
