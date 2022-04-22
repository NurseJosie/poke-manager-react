import '../styles/Home.css';

const Home = () => {
  return (
    <section className="container">
      <h2>HOME</h2>
      <section className="sources">
        <h3>
          Use this Poké Mangager by adding Pokémon from the Pokédex to your
          Team!
        </h3>
        <h4>SOURCES:</h4>
        <ul>
          <li>
            <a href="http://pokeapi.co/">PokeAPI</a>
          </li>
          <li>
            <a href="https://www.pokemon.com/se/">Pokemon Official Website</a>
          </li>
          <li>
            <a href="https://www.beano.com/posts/pokemon-facts">
              Pokemon facts
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Home;
