import { useState } from "react";

export default function App() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const addGames = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 100000);
    gameList = { id, title, coverImage };
    setGames((gameList) => [...gameList, games]);
  };

  const removeGame = (id) => {
    setGames((state) => state.filter((game) => game.id !== id));
  };

  function handleSubmit(ev) {
    ev.preventDefault();
    addGames({ title, cover });
    setTitle("");
    setCover("");
  }

  return (
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input
            type="text"
            id="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar a biblioteca</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="capa do jogo" />
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame(game.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
