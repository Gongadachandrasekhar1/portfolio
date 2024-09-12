import { Link } from "react-router-dom";
import "./nav.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0  ms-5" to="/">
          Chandra Sekhar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span className="navbar-toggler-icon fs-6"></span>
        </button>
        <div
          className="collapse navbar-collapse nav justify-content-end"
          id="navbarContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">
                skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Resume" className="nav-link">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ContactMe" className="nav-link">
                ContactMe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
