import PropTypes from "prop-types";
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
  children: PropTypes.element.isRequired,
};

export default NavLink;
