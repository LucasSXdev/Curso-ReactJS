import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <header>
      <h1 id="logo">ReactStock</h1>
      <nav className="menu">
        <Link className="menu-link" to="/">
          Início
        </Link>
        <Link className="menu-link" to="/layout">
          Items
        </Link>
      </nav>
    </header>
  );
}
