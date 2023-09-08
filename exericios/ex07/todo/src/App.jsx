import { useState } from "react";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [content, setContent] = useState([]);

  const handlleKeyPress = (ev) => {
    const key = ev.key;
    const newContent = {
      id: Math.floor(Math.random() * 1000000),
      atividade: ev.target.value,
    };

    if (key == "Enter") {
      setContent((state) => [newContent, ...state]);
      setTarefa("");
    }
  };

  const excluirTarefa = (id) => {
    const novaLista = content.filter((item) => item.id !== id);
    setContent(novaLista);
  };

  return (
    <div id="app" style={{ width: "100vw" }}>
      <div id="todo" style={{ border: "1px solid blue", margin: "0 auto" }}>
        <input
          type="text"
          placeholder="Digite uma tarefa:"
          value={tarefa}
          onKeyDown={handlleKeyPress}
          onChange={(ev) => setTarefa(ev.target.value)}
        />
        <ul>
          {content.length > 0 ? (
            content.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {item.atividade}{" "}
                <button onClick={() => excluirTarefa(item.id)}>
                  Excluir tarefa
                </button>
              </li>
            ))
          ) : (
            <p>Adicionar uma tarefa!</p>
          )}
        </ul>
      </div>
    </div>
  );
}
