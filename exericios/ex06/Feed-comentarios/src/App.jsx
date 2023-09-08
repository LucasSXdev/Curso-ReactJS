import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 100000),
      author: email,
      content: content,
      atTime: new Date(),
    };

    setComments((state) => [newComment, ...state]);

    setEmail("");
    setContent("");
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
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <button type="submit">Enviar comentário</button>
      </form>
      <div id="Comments">
        <hr />
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.author}</h3>
              <p>{comment.content}</p>
              <p>{comment.atTime.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </div>
    </div>
  );
}
