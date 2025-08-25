import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">HelmsBriscoe</Link>
        <div>
          <Link className="nav-link d-inline" to="/about">About</Link>
          <Link className="nav-link d-inline" to="/contact">Contact</Link>
          <Link className="nav-link d-inline" to="/user-profile">User Profile</Link>
        </div>
      </div>
    </nav>
  );
}
