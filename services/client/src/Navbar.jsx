import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ children, ...props }) => (
  <RouterNavLink
    className="nav-link"
    activeClassName="active"
    aria-current="page"
    {...props}
  >
    {children}
  </RouterNavLink>
);

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
};

const Navbar = ({ displayLinks }) => (
  <nav
    className="navbar navbar-expand-md sticky-top navbar-dark"
    style={{ backgroundColor: "#5c6784" }}
  >
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        Penny Jar
      </Link>
      {displayLinks && (
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" exact>
                  Rewards
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tasks">Tasks</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  </nav>
);

Navbar.propTypes = {
  displayLinks: PropTypes.bool,
};

export default Navbar;
