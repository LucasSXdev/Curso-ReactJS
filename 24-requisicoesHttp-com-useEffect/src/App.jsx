async function fetchPokemon() {
  Response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = Response.json();
  return data.results;
}

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  fetchPokemon().then((results) => {
    console.log("requisição feita com sucesso");
    console.log(results);
    setPokemon(results);
  });
  return (
    <div>
      <h2>Pokémon</h2>
      {JSON.stringify(pokemon)}
    </div>
  );
}
