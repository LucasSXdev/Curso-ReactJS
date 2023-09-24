import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <h2>navegação</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  );
}
