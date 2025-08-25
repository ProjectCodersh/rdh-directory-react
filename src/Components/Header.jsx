import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ReDesignHub
        </Link>
        <div>
          <Link className="nav-link d-inline" to="/#">
            About
          </Link>
          <Link className="nav-link d-inline" to="/#">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
