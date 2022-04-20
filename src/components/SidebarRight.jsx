import '../styles/SidebarRight.css';

const SidebarRight = () => {
  let facts = [
    'Pokémon means Pocket Monsters.',
    'Saudi Arabia banned Pokémon at one point.',
    'Pikachu directly translates as Sparkly mouse noise.',
    'Lots of Pokémon names are puns.',
    'Pokémon was created by a video game designer called Satoshi Tajiri in 1995',
    'There was originally a Pokémon based on Dolly the Sheep, but it was scrapped.',
    'Over 30 billion Pokémon cards have been sold.',
    'Only Mario has sold more video games than Pokémon.',
    'Gold and Silver were meant to be the last Pokémon games, but people wanted more!',
    'The colours of the Pokeballs are actually based on Cambells soup cans.',
    'The island of Niue in the South Pacific has put Pikachu on a coin!',
    'Ash´s Pokémon was originally meant to be a Clefairy, not Pikachu!',
    'Many Pokémon are based on traditional Japanese stories and legends.',
    'The TV series was briefly banned in Sweden.',
    'Over 88 billion Pokémon have been caught on Pokémon Go.',
    'The smallest Pokémon is the Flabébé.',
    'In Detective Pikachu, Ryme city is based on London.',
    'Pokémon Red & Blue only reached Europe three years after it was made',
    'Some of the rarest Pokémon cards are worth over $100,000!',
    'Mewtwo was meant to be the most powerful Pokémon ever',
    'Currently, there have been 23 animated Pokémon films released.',
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];

  return (
    <section className="sidebar-container">
      <aside className="sidebar-right">
        <h4>Random Pokémon Fact</h4>
        <p>{fact}</p>
        <img src="./src/assets/025.png" className="pikachu-img" />
      </aside>
    </section>
  );
};

export default SidebarRight;
