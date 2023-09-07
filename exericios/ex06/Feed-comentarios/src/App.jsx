import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [Coment, setComent] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newComent = { email, Coment };
    setComments([...comments, newComent]);

    setEmail("");
    setComent("");
  };

  return (
    <div
      id="app"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <h2 style={{ fontSize: "2.2rem" }}>Seção de comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          style={{ padding: "5px" }}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <label htmlFor="comentario">Comentario</label>
        <textarea
          id="comentario"
          value={Coment}
          onChange={(ev) => setComent(ev.target.value)}
        ></textarea>
        <button type="submit">Enviar comentário</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index} style={{ width: "30vw" }}>
            <h4>Email:</h4>
            <p>{comment.email}</p>
            <p>{data.toLocaleString()}</p>
            <h4>Comentário:</h4>
            <p>{comment.Coment}</p>
            <hr />
          </div>
        ))}
      </div>
      {comments.length === 0 && <p>Seja o primeiro a comentar</p>}
    </div>
  );
}
